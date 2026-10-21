import { motion } from "motion/react";
import { Heart, ArrowRight, Sparkles } from "lucide-react";

const hearts = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 11) % 100}%`,
  delay: (i % 8) * 0.8,
  duration: 7 + (i % 5),
  size: 13 + (i % 4) * 8,
}));

export default function Welcome({ onNext }) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff0f6] via-[#ffe0ed] to-[#ffd1e5] px-5 py-12">

      {/* Floating hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {hearts.map((heart) => (
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

      {/* Decorative circles */}
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-white/30 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 45, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 w-full max-w-lg rounded-[36px] border border-white/80 bg-white/65 px-7 py-12 text-center shadow-[0_25px_80px_rgba(219,92,145,0.15)] backdrop-blur-xl sm:px-12"
      >

        <motion.div
          animate={{ rotate: [-8, 8, -8], y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full bg-pink-100 shadow-inner"
        >
          <Heart
            size={48}
            className="fill-pink-400 text-pink-400"
          />
        </motion.div>

        <div className="mb-5 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-pink-400">
          <Sparkles size={15} />
          A little something for you
          <Sparkles size={15} />
        </div>

        <h1 className="mb-5 text-4xl font-bold leading-tight text-[#d95d92] sm:text-5xl">
          Hi, Sengkuu SulisSetiyani! ♡
        </h1>

        <p className="mx-auto mb-3 max-w-sm text-base font-semibold leading-relaxed text-[#a85c7b]">
          Aku punya sesuatu yang spesial buat kamu...
        </p>

        <p className="mx-auto mb-9 max-w-sm text-sm leading-7 text-[#ad7890]">
          Mungkin ini cuma website kecil,
          tapi setiap bagian di dalamnya
          aku buat khusus untuk seseorang
          yang paling spesial di hatiku.
        </p>

        <motion.button
          type="button"
          onClick={onNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group mx-auto flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#f48bb5] to-[#dc6095] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-pink-300/60 transition-shadow hover:shadow-xl"
        >
          Open Our Story
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </motion.button>

        <p className="mt-8 text-xs font-medium tracking-wide text-pink-400">
          Made with ♡, just for you
        </p>
      </motion.div>

      <div className="absolute bottom-5 text-center text-xs font-medium text-[#c67c9c]">
        Our Little Love Story © 2026
      </div>
    </main>
  );
}
