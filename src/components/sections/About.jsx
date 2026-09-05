/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
const GITHUB_USERNAME = "nifakit"; 

const levelStyles = [
  "bg-white/[0.04]",
  "bg-violet-500/30",
  "bg-violet-500/55",
  "bg-cyan-400/65",
  "bg-cyan-300/90",
];

const monthNamesEn = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function buildWeeks(contributions) {
  if (!contributions?.length) return [];

  const byDate = new Map(contributions.map((c) => [c.date, c]));
  const first = new Date(contributions[0].date);
  const last = new Date(
    contributions[contributions.length - 1].date
  );

  const start = new Date(first);
  start.setDate(start.getDate() - start.getDay());

  const weeks = [];
  const cursor = new Date(start);

  while (cursor <= last) {
    const week = [];

    for (let i = 0; i < 7; i++) {
      const iso = cursor.toISOString().slice(0, 10);
      const entry = byDate.get(iso);

      week.push(
        entry
          ? entry
          : {
              date: iso,
              count: 0,
              level: -1,
            }
      );

      cursor.setDate(cursor.getDate() + 1);
    }

    weeks.push(week);
  }

  return weeks;
}

function getMonthLabels(weeks) {
  const labels = [];
  let lastMonth = -1;

  weeks.forEach((week, i) => {
    const d = new Date(week[0].date);
    const m = d.getMonth();

    if (m !== lastMonth) {
      labels.push({
        index: i,
        text: monthNamesEn[m],
      });

      lastMonth = m;
    }
  });

  return labels;
}

const MagnetButton = ({ onClick, label }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const MAX_OFFSET = 6;
  const STRENGTH = 0.1;

  const handleMove = (e) => {
    const el = ref.current;

    if (!el) return;

    const rect = el.getBoundingClientRect();

    const relX =
      e.clientX - (rect.left + rect.width / 2);

    const relY =
      e.clientY - (rect.top + rect.height / 2);

    const x = Math.max(
      -MAX_OFFSET,
      Math.min(MAX_OFFSET, relX * STRENGTH)
    );

    const y = Math.max(
      -MAX_OFFSET,
      Math.min(MAX_OFFSET, relY * STRENGTH)
    );

    setPos({ x, y });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  return (
    <a
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
      className="group flex-shrink-0 inline-flex items-center gap-2 rounded-full px-5 py-2.5
                 border border-white/15 bg-white/[0.04] hover:bg-white/[0.07]
                 hover:border-violet-400/40 transition-[background-color,border-color,transform] duration-150 ease-out"
    >
      <span className="text-xs font-medium text-zinc-200 whitespace-nowrap">
        {label}
      </span>

      <span className="text-violet-300 text-xs group-hover:translate-x-0.5 transition-transform">
        →
      </span>
    </a>
  );
};

const About = ({ onMoreAbout }) => {
  const { t } = useTranslation();

  const [status, setStatus] = useState("loading");
  const [weeks, setWeeks] = useState([]);
  const [totalContributions, setTotalContributions] =
    useState(null);
  const [publicRepos, setPublicRepos] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const [contribRes, userRes] = await Promise.all([
          fetch(
            `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
          ),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}`
          ),
        ]);

        if (!contribRes.ok || !userRes.ok) {
          throw new Error("GitHub API error");
        }

        const contribData = await contribRes.json();
        const userData = await userRes.json();

        if (ignore) return;

        const flat = contribData.contributions || [];

        setWeeks(buildWeeks(flat));

        setTotalContributions(
          contribData.total?.lastYear ??
            flat.reduce((s, c) => s + c.count, 0)
        );

        setPublicRepos(userData.public_repos ?? null);
        setStatus("ready");
      } catch (err) {
        if (!ignore) setStatus("error");
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, []);

  const monthLabels = getMonthLabels(weeks);
  const cellPx = 14;
  const gapPx = 4;

  return (
    <section
      id="about"
      className="py-28 lg:py-36 bg-black/30 relative overflow-hidden"
    >
      <style>{`
        .gh-scroll::-webkit-scrollbar {
          height: 6px;
        }

        .gh-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .gh-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.25);
          border-radius: 9999px;
        }

        .gh-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.4);
        }

        .gh-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.25) transparent;
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(at_center,#ffffff08_0%,transparent_70%)] pointer-events-none" />

      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-violet-600/15 blur-[120px] pointer-events-none" />

      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative">

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-2px] leading-none mb-10 reveal bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
          {t("about.title")}
        </h2>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          <div className="lg:col-span-7 reveal">
            <div className="h-full flex flex-col rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7">

              <div className="flex items-center gap-2 mb-6">
                <svg
                  className="w-5 h-5 text-zinc-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.44 3.44 10.05 8.21 11.68.6.11.82-.27.82-.6v-2.1c-3.34.75-4.04-1.65-4.04-1.65-.55-1.44-1.33-1.83-1.33-1.83-1.09-.77.08-.75.08-.75 1.2.09 1.83 1.27 1.83 1.27 1.07 1.87 2.81 1.33 3.49 1.02.11-.79.42-1.33.76-1.64-2.66-.31-5.47-1.37-5.47-6.1 0-1.35.46-2.45 1.22-3.31-.12-.31-.53-1.56.12-3.25 0 0 1-.33 3.3 1.26a11.2 11.2 0 0 1 6 0c2.28-1.59 3.29-1.26 3.29-1.26.65 1.69.24 2.94.12 3.25.76.86 1.22 1.96 1.22 3.31 0 4.74-2.81 5.78-5.49 6.09.43.38.81 1.13.81 2.28v3.38c0 .33.22.72.83.6C20.57 22.34 24 17.74 24 12.3 24 5.5 18.63 0 12 0Z" />
                </svg>

                <p className="text-sm font-medium text-zinc-200">
                  GitHub Activity
                </p>
              </div>

              {status === "loading" && (
                <div className="animate-pulse space-y-3 flex-1">
                  <div className="h-[180px] rounded-lg bg-white/5" />
                  <div className="h-4 w-40 rounded bg-white/5" />
                </div>
              )}

              {status === "error" && (
                <p className="text-sm text-zinc-500">
                  {t(
                    "about.github.error",
                    "Failed to load GitHub activity."
                  )}
                </p>
              )}

              {status === "ready" && (
                <div className="flex-1 flex flex-col justify-between">
                  <div>

                    <div className="gh-scroll overflow-x-auto pb-3">
                      <div
                        style={{
                          width:
                            weeks.length *
                            (cellPx + gapPx),
                        }}
                      >
                        <div
                          className="grid"
                          style={{
                            gridTemplateColumns: `repeat(${weeks.length}, ${cellPx}px)`,
                            gridAutoRows: `${cellPx}px`,
                            gap: `${gapPx}px`,
                          }}
                        >
                          {weeks.map((week, wi) =>
                            week.map((day, di) => (
                              <div
                                key={`${wi}-${di}`}
                                title={
                                  day.level >= 0
                                    ? `${day.date}: ${day.count}`
                                    : undefined
                                }
                                className={`rounded-[4px] ${
                                  day.level < 0
                                    ? "bg-transparent"
                                    : levelStyles[day.level]
                                }`}
                                style={{
                                  gridColumn: wi + 1,
                                  gridRow: di + 1,
                                }}
                              />
                            ))
                          )}
                        </div>

                        <div
                          className="relative mt-2 h-3"
                          style={{
                            width:
                              weeks.length *
                              (cellPx + gapPx),
                          }}
                        >
                          {monthLabels.map((m) => (
                            <span
                              key={m.index}
                              className="absolute text-[10px] text-zinc-600"
                              style={{
                                left:
                                  m.index *
                                  (cellPx + gapPx),
                              }}
                            >
                              {m.text}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <p className="text-xs text-zinc-500">
                        {totalContributions}{" "}
                        {t(
                          "about.github.activities",
                          "activities over the year"
                        )}
                      </p>

                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-zinc-600">
                          Less
                        </span>

                        {levelStyles.map((s, i) => (
                          <span
                            key={i}
                            className={`w-2.5 h-2.5 rounded-[2px] ${s}`}
                          />
                        ))}

                        <span className="text-[10px] text-zinc-600">
                          More
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 mt-6">

                    <div className="flex gap-6">
                      <div>
                        <p className="text-2xl font-semibold bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
                          {totalContributions}
                        </p>

                        <p className="text-xs text-zinc-500 mt-0.5">
                          {t(
                            "about.github.contributions",
                            "Contributions"
                          )}
                        </p>
                      </div>

                      <div>
                        <p className="text-2xl font-semibold bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
                          {publicRepos ?? "—"}
                        </p>

                        <p className="text-xs text-zinc-500 mt-0.5">
                          {t(
                            "about.github.projects",
                            "Projects"
                          )}
                        </p>
                      </div>
                    </div>

                    

                      <MagnetButton
                        onClick={onMoreAbout}
                          label={t("about.cta.title", "More about me")}
                      />
                          
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 reveal">
            <div className="h-full flex items-center rounded-3xl p-8 md:p-10 border border-white/10 bg-white/5 backdrop-blur-3xl">
              <p className="text-lg md:text-xl text-zinc-200 leading-relaxed">
                {t("about.text")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;