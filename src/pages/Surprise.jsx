import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import {
  Gift,
  Heart,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  PartyPopper,
} from "lucide-react";

const floatingHearts = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${(i * 43 + 7) % 100}%`,
  delay: (i % 10) * 0.5,
  duration: 5 + (i % 5),
  size: 15 + (i % 4) * 7,
}));

export default function Surprise({ onBack, onRestart }) {
  const [opened, setOpened] = useState(false);

  const launchConfetti = () => {
    const colors = [
      "#ff8fbd",
      "#ffd1e5",
      "#ffffff",
      "#f9a8d4",
      "#e879a8",
    ];

    confetti({
      particleCount: 130,
      spread: 90,
      origin: { y: 0.65 },
      colors,
    });

    setTimeout(() => {
      confetti({
        particleCount: 90,
        spread: 120,
        origin: { x: 0.2, y: 0.55 },
        colors,
      });

      confetti({
        particleCount: 90,
        spread: 120,
        origin: { x: 0.8, y: 0.55 },
        colors,
      });
    }, 350);
  };

  const openGift = () => {
    if (opened) return;

    setOpened(true);
    launchConfetti();
  };

  useEffect(() => {
    return () => confetti.reset();
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff0f6] via-[#ffe1ed] to-[#ffd1e5] px-5 py-12">

      {/* Floating hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingHearts.map((heart) => (
          <Heart
            key={heart.id}
            className="floating-heart fill-pink-300 text-pink-300"
            style={{
              left: heart.left,
              width: heart.size,
              height: heart.size,
              animationDelay: `${heart.delay}s`,
              animationDuration: `${heart.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-pink-300/40 blur-3xl" />

      <div className="relative z-10 w-full max-w-2xl text-center">

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="mb-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-pink-400">
            <Sparkles size={15} />
            Made especially for you
            <Sparkles size={15} />
          </div>

          <h1 className="mb-4 text-3xl font-bold text-[#d95d92] sm:text-5xl">
            One Last Surprise ♡
          </h1>

          <p className="mx-auto max-w-md text-sm leading-7 text-[#ad7890]">
            Sebelum cerita kecil ini berakhir,
            aku masih punya satu hal
            yang ingin aku kasih ke kamu, Seng.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div
              key="gift"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.3 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <motion.button
                type="button"
                onClick={openGift}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  y: [0, -13, 0],
                  rotate: [-3, 3, -3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="my-12 flex h-56 w-56 items-center justify-center rounded-[45px] border-4 border-white/70 bg-gradient-to-br from-[#ffbad6] to-[#f17ead] shadow-[0_25px_65px_rgba(219,92,145,0.3)] sm:h-64 sm:w-64"
                aria-label="Open your surprise gift"
              >
                <Gift
                  size={125}
                  strokeWidth={1.5}
                  className="text-white drop-shadow-lg"
                />
              </motion.button>

              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-base font-bold text-[#d95d92]"
              >
                Tap the gift, Seng! 🎁
              </motion.p>

              <p className="mt-3 text-xs text-[#ad7890]">
                A little surprise, with a lot of love.
              </p>

              <button
                type="button"
                onClick={onBack}
                className="mt-12 flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-6 py-3 text-sm font-bold text-pink-500"
              >
                <ArrowLeft size={17} />
                Back to Letter
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="rounded-[36px] border border-white/80 bg-white/80 px-7 py-12 shadow-[0_25px_80px_rgba(219,92,145,0.18)] backdrop-blur-xl sm:px-12"
            >
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full bg-pink-100"
              >
                <Heart
                  size={52}
                  className="fill-pink-400 text-pink-400"
                />
              </motion.div>

              <div className="mb-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-pink-400">
                <PartyPopper size={16} />
                Surprise!
                <PartyPopper size={16} />
              </div>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-[#d95d92] sm:text-4xl">
                I Love You, Seng! ♡
              </h2>

              <p className="mx-auto max-w-md text-sm leading-8 text-[#965c77] sm:text-base">
                Kalau kamu sudah sampai di sini,
                berarti kamu sudah melihat
                sedikit dari banyaknya alasan
                kenapa kamu begitu spesial buat aku.
              </p>

              <p className="mx-auto mt-5 max-w-md text-sm leading-8 text-[#965c77] sm:text-base">
                Aku nggak bisa menjanjikan
                setiap hari akan selalu sempurna.
                Tapi aku ingin terus belajar
                menjadi seseorang yang lebih baik
                untuk kita.
              </p>

              <p className="mx-auto mt-5 max-w-md text-sm font-semibold leading-8 text-[#d95d92] sm:text-base">
                Terima kasih sudah menjadi bagian
                dari cerita hidupku.
                Semoga cerita kita masih panjang,
                penuh tawa, cinta, dan kenangan indah.
              </p>

              <div className="my-8 flex justify-center gap-3 text-2xl">
                💗 🌷 🧸 💌 💗
              </div>

              <div className="rounded-2xl bg-pink-50 px-5 py-5">
                <p className="text-sm font-bold text-[#d95d92]">
                  Since August 30, 2026
                </p>

                <p className="mt-2 text-xs text-[#ad7890]">
                  You will always be my favorite chapter.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={launchConfetti}
                  className="flex items-center gap-2 rounded-full border border-pink-200 bg-white px-5 py-3 text-sm font-bold text-pink-500 transition hover:bg-pink-50"
                >
                  <PartyPopper size={17} />
                  More Love!
                </button>

                <motion.button
                  type="button"
                  onClick={onRestart}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f48bb5] to-[#dc6095] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-pink-200"
                >
                  <RotateCcw size={17} />
                  Read Our Story Again
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="mt-10 text-xs font-medium text-pink-400">
          Made with endless love, only for Seng ♡
        </p>
      </div>
    </main>
  );
}