import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSending(false);
          setIsSent(true);
          form.current.reset();
          setTimeout(() => setIsSent(false), 5000);
        },
        (err) => {
          console.error(err);
          setIsSending(false);
          setError(true);
        }
      );
  };

  return (
    <section id="contact" className="py-28">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="max-w-xl mx-auto">
          <h2 className="text-5xl font-semibold tracking-tighter text-center mb-12 reveal">
            {t("contact.title")}
          </h2>

          <div className="glass rounded-3xl p-10 relative overflow-hidden">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="from_name"
                placeholder={t("contact.name")}
                className="w-full bg-white/5 border border-white/10 focus:border-white/30 rounded-2xl px-6 py-4 outline-none transition-all"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder={t("contact.email")}
                className="w-full bg-white/5 border border-white/10 focus:border-white/30 rounded-2xl px-6 py-4 outline-none transition-all"
                required
              />
              <textarea
                name="message"
                rows={5}
                placeholder={t("contact.message")}
                className="w-full bg-white/5 border border-white/10 focus:border-white/30 rounded-3xl px-6 py-4 outline-none resize-none transition-all"
                required
              />

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-5 bg-white text-black rounded-3xl flex items-center justify-center gap-3 text-sm font-medium hover:bg-violet-200 active:scale-95 transition-all disabled:opacity-70"
              >
                {isSending ? (
                  <>
                    <span className="animate-spin h-4 w-4 border-2 border-black/30 border-t-black rounded-full" />
                    Отправляется...
                  </>
                ) : (
                  <>
                    {t("contact.send")}
                    <span className="text-lg leading-none">→</span>
                  </>
                )}
              </button>
            </form>

            
            {isSent && (
              <div className="absolute inset-0 bg-zinc-950/95 backdrop-blur-2xl flex flex-col items-center justify-center z-20 rounded-3xl">
                <div className="text-7xl mb-6">✅</div>
                <p className="text-3xl font-medium text-white mb-2">Сообщение отправлено!</p>
                <p className="text-zinc-400 text-center max-w-xs">
                  Спасибо! Я отвечу как можно скорее.
                </p>
              </div>
            )}

            
            {error && (
              <div className="absolute inset-0 bg-red-950/90 backdrop-blur-2xl flex flex-col items-center justify-center z-20 rounded-3xl">
                <div className="text-7xl mb-6">❌</div>
                <p className="text-3xl font-medium text-red-300">Что-то пошло не так</p>
                <button
                  onClick={() => setError(false)}
                  className="mt-8 px-8 py-3 text-sm border border-red-400 rounded-3xl hover:bg-red-900 transition-all"
                >
                  Попробовать ещё раз
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;