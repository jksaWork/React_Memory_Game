import React from "react";
import cardArray, { items } from "../constants";
import GameCard from "./GameCard";
function CardSection() {
  return (
    <div
      href="#"
      className="p-6 mx-5 sm:mx-0 cursor-pointer  bg-primary  z-[10]  grid grid-cols-4 gap-x-5 gap-y-3   "
    >
      {cardArray.map((el) => (
        <GameCard key={el.key} item={el} />
      ))}
    </div>
  );
}

export default CardSection;
