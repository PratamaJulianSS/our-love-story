import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Heart,
  ArrowLeft,
  ArrowRight,
  CalendarHeart,
  Sparkles,
  Clock3,
} from "lucide-react";

// Tanggal jadian: 30 Agustus 2026
// Menggunakan zona waktu Indonesia Barat (WIB).
const anniversaryDate = new Date("2026-08-30T00:00:00+07:00");

function calculateTimeTogether() {
  const now = new Date();

  const difference = Math.max(
    0,
    now.getTime() - anniversaryDate.getTime()
  );

  const totalSeconds = Math.floor(difference / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

export default function LoveCounter({ onBack, onNext }) {
  const [time, setTime] = useState(calculateTimeTogether);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeTogether());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const counters = [
    { label: "Days", value: time.days, emoji: "💗" },
    { label: "Hours", value: time.hours, emoji: "🌷" },
    { label: "Minutes", value: time.minutes, emoji: "🧸" },
    { label: "Seconds", value: time.seconds, emoji: "✨" },
  ];

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff0f6] via-[#ffe4ef] to-[#ffd6e7] px-5 py-12">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-pink-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-pink-300/40 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-2xl rounded-[36px] border border-white/80 bg-white/70 px-5 py-10 text-center shadow-[0_25px_80px_rgba(219,92,145,0.15)] backdrop-blur-xl sm:px-12 sm:py-14"
      >

        {/* Header */}
        <div className="mb-5 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-pink-400">
          <Sparkles size={15} />
          Our special day
          <Sparkles size={15} />
        </div>

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-pink-100"
        >
          <Heart
            size={49}
            className="fill-pink-400 text-pink-400"
          />
        </motion.div>

        <h1 className="mb-4 text-3xl font-bold text-[#d95d92] sm:text-4xl">
          Every Second With You ♡
        </h1>

        <p className="mx-auto mb-7 max-w-md text-sm leading-7 text-[#a85c7b] sm:text-base">
          Sejak hari itu, hidupku punya cerita
          yang jauh lebih indah.
          Dan setiap detik bersamamu
          selalu menjadi sesuatu yang berharga.
        </p>

        {/* Anniversary date */}
        <div className="mb-9 inline-flex items-center gap-3 rounded-full border border-pink-200 bg-white/80 px-5 py-3 text-sm font-bold text-[#d95d92]">
          <CalendarHeart size={19} />
          30 Agustus 2026
        </div>

        {/* Countdown cards */}
        <div className="mb-9 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {counters.map((counter, index) => (
            <motion.div
              key={counter.label}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              className="rounded-[24px] border border-pink-100 bg-gradient-to-b from-white to-[#fff0f6] px-3 py-6 shadow-sm"
            >
              <div className="mb-3 text-2xl">
                {counter.emoji}
              </div>

              <motion.div
                key={`${counter.label}-${counter.value}`}
                initial={{ y: 5, opacity: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-3xl font-bold tabular-nums text-[#d95d92] sm:text-4xl"
              >
                {String(counter.value).padStart(2, "0")}
              </motion.div>

              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#ad7890]">
                {counter.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Love message */}
        <div className="mb-9 rounded-[25px] border border-pink-100 bg-pink-50/80 px-6 py-7">
          <Clock3
            size={23}
            className="mx-auto mb-4 text-pink-400"
          />

          <p className="text-sm font-semibold leading-8 text-[#a85c7b]">
            "Waktu terus berjalan, tapi satu hal
            yang nggak pernah berubah adalah
            betapa bersyukurnya aku
            bisa punya kamu di hidupku."
          </p>

          <p className="mt-4 text-xs font-bold text-pink-400">
            — For my favorite person, Seng ♡
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 rounded-full border border-pink-200 bg-white px-6 py-3 text-sm font-bold text-pink-500 transition hover:bg-pink-50"
          >
            <ArrowLeft size={17} />
            Our Memories
          </button>

          <motion.button
            type="button"
            onClick={onNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f48bb5] to-[#dc6095] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-pink-200"
          >
            A Letter For You
            <ArrowRight size={17} />
          </motion.button>
        </div>

        <p className="mt-8 text-xs font-medium text-pink-400">
          Forever grateful for every second with you 💗
        </p>
      </motion.div>
    </main>
  );
}
