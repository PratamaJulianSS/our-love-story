import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Music2, Pause, Play, Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch (error) {
        console.error("Music playback failed:", error);
        setPlaying(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePause = () => setPlaying(false);
    const handlePlay = () => setPlaying(true);

    audio.addEventListener("pause", handlePause);
    audio.addEventListener("play", handlePlay);

    return () => {
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("play", handlePlay);
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}music/our-song.mp3`}
        loop
        preload="none"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-5 right-5 z-[100] flex items-center gap-2 rounded-full border border-white/80 bg-white/90 p-2 shadow-xl shadow-pink-200/60 backdrop-blur-lg"
      >
        <div className="hidden items-center gap-2 pl-3 sm:flex">
          <Music2 size={17} className="text-pink-400" />
          <span className="text-xs font-bold text-[#d95d92]">
            Our Song ♡
          </span>
        </div>

        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute music" : "Mute music"}
          className="rounded-full p-2 text-pink-500 transition hover:bg-pink-100"
        >
          {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>

        <motion.button
          type="button"
          onClick={toggleMusic}
          whileTap={{ scale: 0.9 }}
          aria-label={playing ? "Pause music" : "Play music"}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-[#f48bb5] to-[#dc6095] text-white shadow-md"
        >
          {playing ? <Pause size={19} /> : <Play size={19} />}
        </motion.button>
      </motion.div>
    </>
  );
}
