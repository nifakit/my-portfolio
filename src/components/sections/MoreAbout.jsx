/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { Gamepad2, Film, Sparkles, ArrowLeft } from "lucide-react";
import { FaDiscord } from "react-icons/fa6";

const movies = [
  { title: "All About Lily Chou-Chou", cover: "src/assets/All About Lily Chou-Chou (2002) directed by Shunji Iwai.jpeg" },
  { title: "My Tomorrow, Your Yesterday (2016)", cover: "src/assets/😭💖 tomorrow i will date yesterday you.jpeg" },
  { title: "Mr. Robot", tag: "series", cover: "src/assets/Mr Robot.jpeg" },
  { title: "You", tag: "series", cover: "src/assets/You 2.jpeg" },
];

const anime = [
  { title: "Josee, the Tiger and the Fish", cover: "src\\assets\\завантаження.jpeg" },
  { title: "A Silent Voice", cover: "src\\assets\\A Silent Voice.jpeg" },
  { title: "Grand Blue", cover: "src\\assets\\Grand Blue (2018- ).jpeg" },
  { title: "Rascal Does Not Dream of Bunny Girl Senpai", cover: "src/assets/Ი︵𐑼.jpeg" },
];

const games = [
  { title: "Mafia: Definitive Edition", cover: "src/assets/Mafia Definitive Edition.jpeg" },
  { title: "Forza Horizon 4", cover: "src/assets/Forza Horizon 4_ Official Game Cover with the stunning Mc'Laren Senna.jpeg" },
  { title: "Katawa Shoujo", cover: "src/assets/Katawa Shoujo.jpeg" },
  { title: "Metro 2033 Redux", cover: "src/assets/Metro 2033 Redux.jpeg" },
  { title: "God of War", cover: "src/assets/God of War (2018).jpeg" },
  { title: "Celeste", cover: "src/assets/Celeste (Switch).jpeg" },
  { title: "MiSide", cover: "src/assets/завантаження (1).jpeg" },
];

const DISCORD_USER_ID = "799909311932661811";
const SPOTIFY_PLAYLIST_ID = "2ouh3djWDrr8nC9xrBQTEx";
const SPOTIFY_SI = "6f45374a02484b95";

const STATUS_COLORS = {
  online: "#23a55a",
  idle: "#f0b232",
  dnd: "#f23f43",
  offline: "#80848e",
};

const STATUS_LABELS = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline",
};

const useLanyard = (userId) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!userId || userId === "000000000000000000") return;

    let cancelled = false;

    const load = async () => {
      try {
        const res = await fetch(
          `https://api.lanyard.rest/v1/users/${userId}`
        );

        const json = await res.json();

        if (!cancelled && json.success) {
          setData(json.data);
        }
      } catch {
        if (!cancelled) {
          setData(null);
        }
      }
    };

    load();

    const interval = setInterval(load, 15000);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [userId]);

  return data;
};

const Widget = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl overflow-hidden ${className}`}
  >
    {children}
  </div>
);

const CoverCard = ({ title, cover, tag }) => (
  <div className="group relative aspect-[2/3] overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
    {cover ? (
      <img
        src={cover}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    ) : (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-400/10 via-violet-400/10 to-fuchsia-400/10 p-2">
        <span className="text-[9px] leading-tight text-white/60 text-center font-medium">
          {title}
        </span>
      </div>
    )}

    {tag && (
      <span className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[7px] uppercase tracking-wide text-white/70">
        {tag}
      </span>
    )}

    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent px-2 pt-8 pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      <span className="text-[9px] leading-tight text-white line-clamp-3">
        {title}
      </span>
    </div>
  </div>
);

const MediaSection = ({ icon: Icon, label, items, cols }) => (
  <section className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-4">
    <div className="flex items-center gap-2 mb-3">
      <Icon className="w-4 h-4 text-white/50" />
      <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
        {label}
      </span>
    </div>

    <div className={`grid ${cols} gap-2`}>
      {items.map((item) => (
        <CoverCard
          key={item.title}
          title={item.title}
          tag={item.tag}
          cover={item.cover}
        />
      ))}
    </div>
  </section>
);

const DISCORD_APP_ASSET = (applicationId, assetId) => {
  if (!assetId) return null;

  if (assetId.startsWith("mp:")) {
    return `https://media.discordapp.net/${assetId.replace("mp:", "")}`;
  }

  return `https://cdn.discordapp.com/app-assets/${applicationId}/${assetId}.png`;
};

const formatTime = (ms) => {
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const min = Math.floor(totalSec / 60);
  const sec = totalSec % 60;

  return `${min}:${sec.toString().padStart(2, "0")}`;
};

const useSpotifyProgress = (spotify) => {
  const [now, setNow] = useState(0);

  useEffect(() => {
    if (!spotify) return;

    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [spotify]);

  if (!spotify) return null;

  const { start, end } = spotify.timestamps;

  const elapsed = Math.min(now - start, end - start);
  const duration = end - start;

  const percent = duration > 0 ? (elapsed / duration) * 100 : 0;

  return {
    elapsed,
    duration,
    percent,
  };
};

const DiscordWidget = ({ presence }) => {
  const status = presence?.discord_status || "offline";
  const spotify = presence?.listening_to_spotify ? presence.spotify : null;
  const progress = useSpotifyProgress(spotify);

  const game = presence?.activities?.find((activity) => activity.type !== 4 && activity.name !== "Spotify");
  const gameIcon = game ? DISCORD_APP_ASSET(game.application_id, game.assets?.large_image) : null;

  return (
    <Widget className="h-full p-6 flex flex-col gap-5">
      <div className="flex items-center gap-4">
        <div className="relative shrink-0">
          <div className="w-14 h-14 rounded-2xl bg-[#5865F2]/15 flex items-center justify-center">
            <FaDiscord className="w-7 h-7 text-[#8b93ff]" />
          </div>
          <span
            className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-[#0a0a0e]"
            style={{ backgroundColor: STATUS_COLORS[status] || STATUS_COLORS.offline }}
          />
        </div>

        <div className="min-w-0">
          <div className="text-sm text-white/90 font-medium">Discord</div>
          <div className="text-xs text-zinc-500">{STATUS_LABELS[status] || STATUS_LABELS.offline}</div>
        </div>
      </div>

      {spotify && (
        <div className="flex gap-3 items-center rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <img src={spotify.album_art_url} alt={spotify.album} className="w-14 h-14 rounded-lg object-cover shrink-0" />

          <div className="min-w-0 flex-1">
            <div className="text-xs font-medium text-white/90 truncate">{spotify.song}</div>
            <div className="text-[11px] text-zinc-500 truncate">{spotify.artist}</div>

            <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300 transition-[width] duration-1000 ease-linear"
                style={{ width: `${progress?.percent ?? 0}%` }}
              />
            </div>

            <div className="flex justify-between mt-1 text-[9px] text-zinc-600">
              <span>{formatTime(progress?.elapsed ?? 0)}</span>
              <span>{formatTime(progress?.duration ?? 0)}</span>
            </div>
          </div>
        </div>
      )}
      {game && (
        <div className="flex gap-3 items-center rounded-xl border border-white/10 bg-white/[0.03] p-3">
          {gameIcon ? (
            <img src={gameIcon} alt={game.name} className="w-12 h-12 rounded-lg object-cover shrink-0" />
          ) : (
            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
              <FaDiscord className="w-5 h-5 text-white/30" />
            </div>
          )}

          <div className="min-w-0 flex-1">
            <div className="text-xs font-medium text-white/90 truncate">{game.name}</div>
            {game.details && <div className="text-[11px] text-zinc-500 truncate">{game.details}</div>}
            {game.state && <div className="text-[10px] text-zinc-600 truncate">{game.state}</div>}
          </div>
        </div>
      )}

      {!spotify && !game && (
        <div className="text-[11px] text-zinc-600">Nothing active right now</div>
      )}
    </Widget>
  );
};

const SpotifyWidget = () => (
  <Widget className="w-[73%]">
    <iframe
      title="Spotify playlist"
      style={{ borderRadius: "12px" }}
      src={`https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=generator&si=${SPOTIFY_SI}`}
      width="100%"
      height="352"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  </Widget>
);


const MoreAbout = ({ onBack }) => {
  const presence = useLanyard(DISCORD_USER_ID);

  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }

    window.location.hash = "hero";
  };

  return (
    <div className="fixed inset-0 z-[100] h-dvh w-dvw bg-[#0a0a0e] text-white overflow-y-auto">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(at_20%_0%,rgba(124,58,237,0.12),transparent_45%)]" />

      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(at_90%_30%,rgba(34,211,238,0.08),transparent_40%)]" />

      <div className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 py-4 sm:py-6">
        <header className="flex items-center justify-between mb-5">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 text-zinc-400 hover:text-white text-xs transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </button>

          <div className="text-[10px] uppercase tracking-[0.25em] text-white/30">
            More about me
          </div>
        </header>

        <section className="grid md:grid-cols-12 gap-3 mb-5">
  <div className="md:col-span-5">
    <DiscordWidget presence={presence} />
  </div>

  <div className="md:col-span-7 flex justify-normal md:justify-end">
    <SpotifyWidget />
  </div>
</section>

        <section className="grid lg:grid-cols-12 gap-3">
          <div className="lg:col-span-6">
            <MediaSection
              icon={Film}
              label="Movies & Series"
              items={movies}
              cols="grid-cols-2 sm:grid-cols-4"
            />
          </div>

          <div className="lg:col-span-6">
            <MediaSection
              icon={Sparkles}
              label="Anime"
              items={anime}
              cols="grid-cols-2 sm:grid-cols-4"
            />
          </div>

          <div className="lg:col-span-12">
            <MediaSection
              icon={Gamepad2}
              label="Games"
              items={games}
              cols="grid-cols-2 sm:grid-cols-4 lg:grid-cols-7"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MoreAbout;