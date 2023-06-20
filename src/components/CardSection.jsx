import React from "react";
import { items } from "../constants";
import GameCard from "./GameCard";
import { useGameContext } from "../contexts/GameProvider";
function CardSection() {
  const { CardItems, GameMode, HardCardItems } = useGameContext();
  const grid_cols = GameMode == "easy" ? "grid-cols-4" : "grid-cols-6";
  return (
    <div
      href="#HelloWorld"
      className={`p-6 mx-5 sm:mx-0 cursor-pointer  bg-primary  z-[10]  grid  gap-2 ${grid_cols}`}
    >
      {GameMode == "easy" &&
        CardItems.map((el) => <GameCard key={el.key} item={el} />)}

      {GameMode == "hard" &&
        HardCardItems.map((el) => <GameCard key={el.key} item={el} />)}
    </div>
  );
}

export default CardSection;
