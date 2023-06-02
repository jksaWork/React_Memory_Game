import React from "react";
import FaltingImage from "./FaltingImage";
import { useGameContext } from "../contexts/GameProvider";
import CardSection from "./CardSection";
import Winner from "./Winner";
import TopNav from "./TopNav";
function Board() {
  const { screen, gameOver } = useGameContext();

  return (
    <div className="w-full  relative h-screen overflow-hidden   bg-primary flex justify-center items-center">
      {/* {[1, 2, 3, 4, 5].map((el) => { */}
      <TopNav />
      <FaltingImage />
      <CardSection />
      {gameOver && <Winner />}
    </div>
  );
}

export default Board;
