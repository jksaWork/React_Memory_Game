import React from "react";
import { useGameContext } from "../contexts/GameProvider";

function Winner() {
  const { gameOver, restartTheGame, QuniteFromGame } = useGameContext();
  return (
    <div
      className={`w-[350px]  transition-all duration-1000 absolute left-[50%] p-10 z-[100] rounded-lg bg-primary translate-x-[-50%]  translate-y-[-50%] 
    
    ${gameOver ? "top-[50%]" : "top-[-50%] "}
    `}
    >
      <div className="flex flex-col">
        <h1 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#f24699] to-[#14ffa5] inline-block">
          Winners
        </h1>
        <div className="flex flex-row justify-around mt-10">
          <span
            onClick={() => restartTheGame()}
            className="px-3 py-2 cursor-pointer shadow-md font-bold rounded-md bg-gradient-to-r from-[#f24699] to-primary"
          >
            {" "}
            Play More
          </span>
          <span
            className="px-3 py-2 shadow-md font-bold cursor-pointer"
            onClick={() => QuniteFromGame()}
          >
            {" "}
            quite
          </span>
        </div>
      </div>
    </div>
  );
}

export default Winner;
