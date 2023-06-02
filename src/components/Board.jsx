import React from "react";
import FaltingImage from "./FaltingImage";
import { useGameContext } from "../contexts/GameProvider";
import CardSection from "./CardSection";

function Board() {
  const { screen } = useGameContext();

  return (
    <div className="w-full  relative h-screen overflow-hidden   bg-primary flex justify-center items-center">
      {/* {[1, 2, 3, 4, 5].map((el) => { */}
      <FaltingImage />
      <CardSection />
    </div>
  );
}

export default Board;
