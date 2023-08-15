import React, { useState } from "react";
import audioFile from "../assests/sound.mp3";
import "bootstrap/dist/css/bootstrap.min.css";
function Button() {
  const [num, setNum] = useState("0");
  const ranNum = () => {
    const a = Math.floor(Math.random() * 10);
    const b = explode();
    if (b !== 0) {
      const audio = new Audio(audioFile);
      audio.play();
      setNum("^-^");
      return;
    }
    setNum(a);
  };
  const explode = () => {
    const exp = Math.round(Math.random() * 10);
    console.log(exp);
    return exp <= 2 ? exp : 0;
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
