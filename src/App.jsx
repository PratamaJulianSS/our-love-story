import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import Welcome from "./pages/Welcome";
import OurStory from "./pages/OurStory";
import OurMemories from "./pages/OurMemories";
import LoveCounter from "./pages/LoveCounter";
import LoveLetter from "./pages/LoveLetter";
import Surprise from "./pages/Surprise";

import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  const [page, setPage] = useState(0);

  const goToPage = (newPage) => {
    setPage(Math.max(0, Math.min(newPage, 5)));
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const nextPage = () => goToPage(page + 1);
  const previousPage = () => goToPage(page - 1);
  const restartStory = () => goToPage(0);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <MusicPlayer />

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
        >
          {page === 0 && (
            <Welcome onNext={nextPage} />
          )}

          {page === 1 && (
            <OurStory
              onBack={previousPage}
              onNext={nextPage}
            />
          )}

          {page === 2 && (
            <OurMemories
              onBack={previousPage}
              onNext={nextPage}
            />
          )}

          {page === 3 && (
            <LoveCounter
              onBack={previousPage}
              onNext={nextPage}
            />
          )}

          {page === 4 && (
            <LoveLetter
              onBack={previousPage}
              onNext={nextPage}
            />
          )}

          {page === 5 && (
            <Surprise
              onBack={previousPage}
              onRestart={restartStory}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
