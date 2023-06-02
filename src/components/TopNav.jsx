import React from "react";
import { useGameContext } from "../contexts/GameProvider";

function TopNav() {
  const { username } = useGameContext();
  return (
    <div className="navabr  flex justify-between p-5  bg-primary z-[10] absolute top-0 w-full drop-shadow-lg">
      <div>
        <h4 className="text-xl bg-clip-texttext-transparent bg-clip-text bg-gradient-to-r from-[#f24699] to-[#14ffa5] ">
          {username}
        </h4>
      </div>
      <div>
        <h4 className="text-xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f24699] to-[#14ffa5]">
            wins:
          </span>
          {0}
        </h4>
      </div>
      {/* Wins Cound */}
    </div>
  );
}

export default TopNav;
