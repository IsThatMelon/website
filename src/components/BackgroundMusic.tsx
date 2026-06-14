import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Minecraft-style chill ambient music
  const musicUrl = "https://cdn.pixabay.com/audio/2022/02/23/audio_ea70ad08e3.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.15;
      audioRef.current.loop = true;
    }

    // Auto-start on first user interaction
    const startMusic = () => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
      }
      document.removeEventListener("click", startMusic);
      document.removeEventListener("keydown", startMusic);
      document.removeEventListener("scroll", startMusic);
    };

    document.addEventListener("click", startMusic);
    document.addEventListener("keydown", startMusic);
    document.addEventListener("scroll", startMusic);

    return () => {
      document.removeEventListener("click", startMusic);
      document.removeEventListener("keydown", startMusic);
      document.removeEventListener("scroll", startMusic);
    };
  }, []);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={musicUrl} preload="auto" />
      <button
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:box-glow group"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
        ) : (
          <VolumeX className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all" />
        )}
      </button>
    </>
  );
};

export default BackgroundMusic;
