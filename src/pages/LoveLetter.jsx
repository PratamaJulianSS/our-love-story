import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  MailOpen,
  RotateCcw,
} from "lucide-react";

const loveMessage = `Hai, Seng sayangku... ♡

Aku nggak tahu harus mulai dari mana, tapi aku cuma mau bilang kalau aku bersyukur banget bisa kenal dan punya kamu di hidupku.

Sejak 30 Agustus 2026, ada banyak hal kecil yang terasa lebih indah. Mulai dari ngobrol sama kamu, dengerin cerita kamu, sampai hal-hal sederhana yang mungkin nggak selalu kita sadari.

Aku tahu hubungan kita nggak harus selalu sempurna. Pasti ada hari ketika kita capek, salah paham, atau nggak sependapat. Tapi aku berharap kita selalu bisa saling mengerti, saling mendengarkan, dan tetap memilih untuk memperbaiki semuanya bersama.

Terima kasih ya, Seng, karena sudah hadir dan menjadi seseorang yang begitu berarti buat aku.

Aku mungkin nggak selalu bisa kasih hal-hal mewah atau kejutan yang luar biasa. Tapi lewat website kecil ini, aku mau kamu tahu kalau kamu benar-benar spesial buat aku.

Semoga kita bisa terus tumbuh bersama, saling mendukung, dan mengumpulkan lebih banyak kenangan indah.

Dan kalau suatu hari kamu lagi capek atau sedih, aku harap kamu ingat kalau ada seseorang di sini yang selalu ingin melihat kamu bahagia.

I love you, Seng.
More than words can ever explain. ♡`;

export default function LoveLetter({ onBack, onNext }) {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    let index = 0;
    setDisplayedText("");
    setIsFinished(false);

    const interval = setInterval(() => {
      index = Math.min(index + 4, loveMessage.length);
      setDisplayedText(loveMessage.slice(0, index));

      if (index >= loveMessage.length) {
        clearInterval(interval);
        setIsFinished(true);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isOpen]);

  const closeLetter = () => {
    setIsOpen(false);
    setDisplayedText("");
    setIsFinished(false);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff0f6] via-[#ffe4ef] to-[#ffd6e7] px-5 py-12">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-pink-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-pink-300/40 blur-3xl" />

      <div className="relative z-10 w-full max-w-2xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-9 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-pink-400">
            <Sparkles size={15} />
            Words from my heart
            <Sparkles size={15} />
          </div>

          <h1 className="mb-4 text-3xl font-bold text-[#d95d92] sm:text-5xl">
            A Letter For You ♡
          </h1>

          <p className="mx-auto max-w-md text-sm leading-7 text-[#ad7890]">
            Ada beberapa hal yang mungkin
            nggak selalu bisa aku ucapkan langsung.
            Jadi, aku tulis semuanya di sini.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">

          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              {/* Envelope */}
              <motion.button
                type="button"
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative mt-8 h-52 w-72 drop-shadow-[0_20px_25px_rgba(219,92,145,0.25)] sm:h-60 sm:w-80"
                aria-label="Open love letter"
              >
                {/* Envelope body */}
                <div className="absolute inset-0 overflow-hidden rounded-xl bg-[#f48bb5]">
                  <div className="absolute inset-x-0 bottom-0 h-full bg-[#f9a8c9]"
                    style={{
                      clipPath: "polygon(0 100%, 50% 45%, 100% 100%)",
                    }}
                  />

                  <div
                    className="absolute inset-0 bg-[#f7a0c3]"
                    style={{
                      clipPath: "polygon(0 0, 50% 55%, 0 100%)",
                    }}
                  />

                  <div
                    className="absolute inset-0 bg-[#ee82ae]"
                    style={{
                      clipPath: "polygon(100% 0, 50% 55%, 100% 100%)",
                    }}
                  />
                </div>

                {/* Envelope flap */}
                <div
                  className="absolute inset-x-0 top-0 h-[58%] origin-top rounded-t-xl bg-[#fbc1d8]"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  }}
                />

                {/* Heart seal */}
                <motion.div
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute left-1/2 top-[45%] flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg"
                >
                  <Heart
                    size={34}
                    className="fill-pink-400 text-pink-400"
                  />
                </motion.div>
              </motion.button>

              <motion.p
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="mt-10 text-sm font-bold text-[#d95d92]"
              >
                Tap the envelope to open 💌
              </motion.p>

              <p className="mt-3 text-xs text-[#ad7890]">
                A special letter, only for Seng ♡
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative rounded-[30px] border border-white bg-white/85 px-6 py-9 shadow-[0_25px_70px_rgba(219,92,145,0.18)] backdrop-blur-xl sm:px-12 sm:py-12"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-pink-400">
                  To: My Seng ♡
                </span>

                <Heart
                  size={24}
                  className="fill-pink-300 text-pink-300"
                />
              </div>

              <div className="mb-8 h-px bg-pink-100" />

              {/* Typewriter text */}
              <div className="min-h-[220px] whitespace-pre-line text-sm leading-8 text-[#965c77] sm:text-base">
                {displayedText}

                {!isFinished && (
                  <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-pink-400 align-middle" />
                )}
              </div>

              <AnimatePresence>
                {isFinished && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-10 text-right"
                  >
                    <p className="text-sm font-bold text-[#d95d92]">
                      With all my love,
                    </p>

                    <p className="mt-2 text-lg font-bold text-pink-400">
                      Your Favorite Person ♡
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-9 flex flex-wrap justify-center gap-3 border-t border-pink-100 pt-7">
                <button
                  type="button"
                  onClick={closeLetter}
                  className="flex items-center gap-2 rounded-full border border-pink-200 bg-white px-5 py-3 text-sm font-bold text-pink-500"
                >
                  <RotateCcw size={17} />
                  Close Letter
                </button>

                {isFinished && (
                  <motion.button
                    type="button"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={onNext}
                    className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f48bb5] to-[#dc6095] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-pink-200"
                  >
                    One Last Surprise
                    <ArrowRight size={17} />
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Back navigation */}
        {!isOpen && (
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={onBack}
              className="flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-6 py-3 text-sm font-bold text-pink-500 transition hover:bg-white"
            >
              <ArrowLeft size={17} />
              Love Counter
            </button>
          </div>
        )}

        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-pink-400">
          <MailOpen size={15} />
          Sealed with love, just for you
        </div>
      </div>
    </main>
  );
}