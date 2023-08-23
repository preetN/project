import React, { useState } from "react";
import audioFile from "../assests/sound.mp3";
import "bootstrap/dist/css/bootstrap.min.css";
function Button({ setExp, score, setScore, complexity }) {
  const [num, setNum] = useState("🎁");
  const [isOpen, setOpen] = useState(0);

  const arr = ["⚽", "🌸", "🦋", "🎭", "🎵", "🚁", "🐶", "👀", "🙈", "❤️"];
  const ranNum = () => {
    if (isOpen === 0) {
      setOpen(1);
      const a = Math.floor(Math.random() * 10);
      const b = explode();
      if (b !== 0) {
        const audio = new Audio(audioFile);
        audio.play();
        setNum("💣");
        setExp(true);
        return;
      }
      setScore(score + 1);
      setNum(arr[a]);
    } else {
      return;
    }
  };
  const explode = () => {
    const exp = Math.round(Math.random() * 10);
    return exp <= complexity ? exp : 0;
  };
  return (
    <>
      <div className="btn btn-light m-1" onClick={ranNum}>
        {num}
      </div>
    </>
  );
}

export default Button;
