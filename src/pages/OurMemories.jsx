import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    ArrowLeft,
    ArrowRight,
    Heart,
    Camera,
    X,
    ChevronLeft,
    ChevronRight,
    Sparkles,
} from "lucide-react";


const memories = [
    {
        image: `${import.meta.env.BASE_URL}images/memory-1.jpg`,
        title: "Our First Memory",
        caption: "Salah satu awal dari banyak kenangan indah kita ♡",
        rotate: -4,
    },
    {
        image: `${import.meta.env.BASE_URL}images/memory-2.jpg`,
        title: "My Favorite Smile",
        caption: "Senyummu selalu punya tempat spesial di hatiku.",
        rotate: 3,
    },
    {
        image: `${import.meta.env.BASE_URL}images/memory-3.jpg`,
        title: "Little Moments",
        caption: "Hal sederhana jadi istimewa kalau sama kamu.",
        rotate: -2,
    },
    {
        image: `${import.meta.env.BASE_URL}images/memory-4.jpg`,
        title: "With You",
        caption: "Ke mana pun, asal sama kamu, aku bahagia.",
        rotate: 4,
    },
    {
        image: `${import.meta.env.BASE_URL}images/memory-5.jpg`,
        title: "Us Together",
        caption: "Semoga kita terus punya banyak cerita indah.",
        rotate: -3,
    },
    {
        image: `${import.meta.env.BASE_URL}images/memory-6.jpg`,
        title: "My Safe Place",
        caption: "Terima kasih sudah menjadi bagian dari hariku.",
        rotate: 2,
    },
];


export default function OurMemories({ onBack, onNext }) {
    const [selected, setSelected] = useState(null);

    const closeModal = () => setSelected(null);

    const nextPhoto = () => {
        setSelected((prev) => (prev + 1) % memories.length);
    };

    const previousPhoto = () => {
        setSelected(
            (prev) => (prev - 1 + memories.length) % memories.length
        );
    };

    useEffect(() => {
        if (selected === null) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") closeModal();
            if (event.key === "ArrowRight") {
                setSelected((prev) => (prev + 1) % memories.length);
            }
            if (event.key === "ArrowLeft") {
                setSelected(
                    (prev) => (prev - 1 + memories.length) % memories.length
                );
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selected]);

    return (
        <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fff0f6] via-[#ffe4ef] to-[#ffd6e7] px-5 py-12">

            {/* Decorations */}
            <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-pink-200/50 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-pink-300/40 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-6xl">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -25 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-14 text-center"
                >
                    <div className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-pink-400">
                        <Sparkles size={15} />
                        Captured with love
                        <Sparkles size={15} />
                    </div>

                    <h1 className="mb-4 text-3xl font-bold text-[#d95d92] sm:text-5xl">
                        Our Sweet Memories ♡
                    </h1>

                    <p className="mx-auto max-w-md text-sm leading-7 text-[#ad7890] sm:text-base">
                        Setiap foto menyimpan cerita.
                        Dan setiap cerita bersamamu selalu
                        jadi bagian favorit dalam hidupku.
                    </p>

                    <div className="mt-5 flex justify-center">
                        <Camera size={25} className="text-pink-400" />
                    </div>
                </motion.div>

                {/* Gallery */}
                <div className="grid grid-cols-1 gap-10 px-4 sm:grid-cols-2 lg:grid-cols-3">
                    {memories.map((memory, index) => (
                        <motion.button
                            key={index}
                            type="button"
                            initial={{
                                opacity: 0,
                                y: 50,
                                rotate: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                rotate: memory.rotate,
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                            }}
                            whileHover={{
                                scale: 1.05,
                                rotate: 0,
                                y: -8,
                            }}
                            onClick={() => setSelected(index)}
                            className="w-full rounded-sm bg-white p-4 pb-7 text-left shadow-[0_15px_40px_rgba(181,89,128,0.18)]"
                        >
                            <div className="relative mb-5 aspect-square overflow-hidden bg-pink-100">
                                <img
                                    src={memory.image}
                                    alt={memory.title}
                                    loading="lazy"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute right-3 top-3 rounded-full bg-white/80 p-2">
                                    <Heart
                                        size={17}
                                        className="fill-pink-400 text-pink-400"
                                    />
                                </div>
                            </div>

                            <div className="text-center">
                                <h3 className="mb-2 text-lg font-bold text-[#d95d92]">
                                    {memory.title}
                                </h3>

                                <p className="text-xs leading-6 text-[#ad7890]">
                                    {memory.caption}
                                </p>
                            </div>
                        </motion.button>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-20 text-center">
                    <p className="mb-7 text-sm font-medium text-[#ad7890]">
                        And I hope we make a thousand more memories together.
                        💗
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <button
                            type="button"
                            onClick={onBack}
                            className="flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-6 py-3 text-sm font-bold text-pink-500 transition hover:bg-white"
                        >
                            <ArrowLeft size={17} />
                            Our Story
                        </button>

                        <motion.button
                            type="button"
                            onClick={onNext}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f48bb5] to-[#dc6095] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-pink-200"
                        >
                            Love Counter
                            <ArrowRight size={17} />
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Photo modal */}
            <AnimatePresence>
                {selected !== null && (
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label="Photo preview"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-[#4b2035]/85 p-4 backdrop-blur-md"
                    >
                        <button
                            type="button"
                            onClick={closeModal}
                            aria-label="Close photo"
                            className="absolute right-5 top-5 rounded-full bg-white/20 p-3 text-white hover:bg-white/30"
                        >
                            <X size={23} />
                        </button>

                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                previousPhoto();
                            }}
                            aria-label="Previous photo"
                            className="absolute left-3 z-10 rounded-full bg-white/20 p-3 text-white hover:bg-white/30 sm:left-8"
                        >
                            <ChevronLeft size={25} />
                        </button>

                        <motion.div
                            key={selected}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            onClick={(event) => event.stopPropagation()}
                            className="w-full max-w-xl rounded-lg bg-white p-4 pb-7 shadow-2xl"
                        >
                            <img
                                src={memories[selected].image}
                                alt={memories[selected].title}
                                className="max-h-[60vh] w-full rounded-sm object-contain"
                            />

                            <h3 className="mt-5 text-center text-xl font-bold text-[#d95d92]">
                                {memories[selected].title}
                            </h3>

                            <p className="mt-2 text-center text-sm text-[#ad7890]">
                                {memories[selected].caption}
                            </p>

                            <p className="mt-4 text-center text-xs text-pink-400">
                                {selected + 1} / {memories.length}
                            </p>
                        </motion.div>

                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                nextPhoto();
                            }}
                            aria-label="Next photo"
                            className="absolute right-3 z-10 rounded-full bg-white/20 p-3 text-white hover:bg-white/30 sm:right-8"
                        >
                            <ChevronRight size={25} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
