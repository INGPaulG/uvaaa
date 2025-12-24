import { useState } from "react";
import phrases from "../data/phrases";

export default function MagicButton() {
  const [phrase, setPhrase] = useState("");

  const showPhrase = () => {
    const random = Math.floor(Math.random() * phrases.length);
    setPhrase(phrases[random]);
  };

  return (
    <div className="magic-container">
      <button onClick={showPhrase} className="magic-button">
        ✨ Frase mágica
      </button>

      {phrase && (
        <div className="magic-phrase">
          {phrase}
        </div>
      )}
    </div>
  );
}
