import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  BookHeart,
} from "lucide-react";

const stories = [
  {
    emoji: "🌷",
    label: "Chapter 01",
    title: "The Beginning",
    subtitle: "Awal dari semuanya",
    text: "Dulu kita cuma dua orang yang belum tahu kalau suatu hari bakal jadi bagian penting dalam hidup satu sama lain. Tapi ternyata, semesta punya cerita indah buat kita.",
  },
  {
    emoji: "💬",
    label: "Chapter 02",
    title: "Getting Closer",
    subtitle: "Saat kita mulai dekat",
    text: "Dari obrolan sederhana, bercanda, sampai saling cerita tentang hari-hari kita. Tanpa sadar, kamu mulai jadi orang yang selalu aku tunggu kabarnya.",
  },
  {
    emoji: "💗",
    label: "Chapter 03",
    title: "Falling For You",
    subtitle: "Saat aku mulai jatuh cinta",
    text: "Aku nggak tahu persis kapan semuanya berubah. Yang aku tahu, senyummu mulai jadi hal favoritku, dan ngobrol sama kamu selalu jadi bagian terbaik dari hariku.",
  },
  {
    emoji: "💍",
    label: "Chapter 04",
    title: "Us, Finally",
    subtitle: "Akhirnya menjadi kita",
    text: "Dari aku dan kamu, akhirnya menjadi kita. Terima kasih sudah hadir dan memberi warna yang begitu indah dalam hidupku. Aku bahagia bisa menjalani cerita ini sama kamu.",
  },
  {
    emoji: "🧸",
    label: "Chapter 05",
    title: "My Favorite Person",
    subtitle: "Kamu, orang favoritku",
    text: "Seng, mungkin aku nggak selalu pandai mengungkapkan perasaan. Tapi satu hal yang pasti, aku bersyukur banget punya kamu. Semoga kita terus punya banyak cerita indah bersama.",
  },
];

export default function OurStory({ onBack, onNext }) {
  const [index, setIndex] = useState(0);
  const story = stories[index];
  const isLast = index === stories.length - 1;

  const nextStory = () => {
    if (isLast) {
      onNext();
    } else {
      setIndex((prev) => prev + 1);
    }
  };

  const previousStory = () => {
    if (index === 0) {
      onBack();
    } else {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff0f6] via-[#ffe5ef] to-[#ffd6e7] px-5 py-12">

      {/* Background decorations */}
      <div className="pointer-events-none absolute left-[-70px] top-[-70px] h-64 w-64 rounded-full bg-pink-200/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-80px] right-[-80px] h-72 w-72 rounded-full bg-pink-300/40 blur-3xl" />

      <div className="relative z-10 w-full max-w-xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-pink-400">
            <Sparkles size={15} />
            A journey of us
            <Sparkles size={15} />
          </div>

          <h1 className="text-3xl font-bold text-[#d95d92] sm:text-4xl">
            Our Little Story ♡
          </h1>

          <p className="mt-3 text-sm text-[#ad7890]">
            Every love story is beautiful, but ours is my favorite.
          </p>
        </motion.div>

        {/* Progress hearts */}
        <div className="mb-7 flex items-center justify-center gap-3">
          {stories.map((item, i) => (
            <motion.div
              key={item.label}
              animate={{
                scale: i === index ? 1.3 : 1,
              }}
              transition={{ duration: 0.25 }}
            >
              <Heart
                size={19}
                className={
                  i <= index
                    ? "fill-pink-400 text-pink-400"
                    : "fill-pink-100 text-pink-200"
                }
              />
            </motion.div>
          ))}
        </div>

        {/* Story card */}
        <div className="relative min-h-[410px] overflow-hidden rounded-[35px] border border-white/80 bg-white/75 shadow-[0_25px_70px_rgba(219,92,145,0.14)] backdrop-blur-xl">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 55, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -55, scale: 0.96 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex min-h-[410px] flex-col items-center justify-center px-7 py-10 text-center sm:px-12"
            >

              <motion.div
                animate={{ y: [0, -8, 0], rotate: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-pink-100 text-5xl shadow-inner"
              >
                {story.emoji}
              </motion.div>

              <span className="mb-3 rounded-full bg-pink-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-pink-500">
                {story.label}
              </span>

              <h2 className="mb-2 text-2xl font-bold text-[#d95d92] sm:text-3xl">
                {story.title}
              </h2>

              <p className="mb-5 text-sm font-semibold text-pink-400">
                {story.subtitle}
              </p>

              <p className="max-w-md text-sm leading-8 text-[#9d6680] sm:text-base">
                {story.text}
              </p>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="mt-7 flex items-center justify-between gap-4">

          <button
            type="button"
            onClick={previousStory}
            className="flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-5 py-3 text-sm font-bold text-pink-500 transition hover:bg-white"
          >
            <ArrowLeft size={17} />
            Back
          </button>

          <span className="text-xs font-semibold text-pink-400">
            {index + 1} / {stories.length}
          </span>

          <motion.button
            type="button"
            onClick={nextStory}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f48bb5] to-[#dc6095] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-pink-200"
          >
            {isLast ? "Our Memories" : "Next"}
            <ArrowRight size={17} />
          </motion.button>

        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-pink-400">
          <BookHeart size={15} />
          Written with love, especially for Seng
        </div>
      </div>
    </main>
  );
}