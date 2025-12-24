import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/love.mp3" type="audio/mpeg" />
      </audio>

      <button onClick={toggleMusic} className="music-button">
        {playing ? "⏸️ Música" : "▶️ Música"}
      </button>
    </>
  );
}
