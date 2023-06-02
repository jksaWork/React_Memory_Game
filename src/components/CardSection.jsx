import React from "react";
import { items } from "../constants";
import GameCard from "./GameCard";
import { useGameContext } from "../contexts/GameProvider";
function CardSection() {
  const { CardItems } = useGameContext();
  return (
    <div
      href="#HelloWorld"
      className="p-6 mx-5 sm:mx-0 cursor-pointer  bg-primary  z-[10]  grid grid-cols-4 gap-x-5 gap-y-3   "
    >
      {CardItems.map((el) => (
        <GameCard key={el.key} item={el} />
      ))}
    </div>
  );
}

export default CardSection;
