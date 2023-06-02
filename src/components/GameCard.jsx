import { useState } from "react";
import mark from "../assets/mark.png";
import { useGameContext } from "../contexts/GameProvider";
function GameCard({ item }) {
  const [clicked, setClicked] = useState(false);
  const { HandelClickCard } = useGameContext();
  return (
    <div
      className={`
    max-h-[100px]  parent   relative max-w-[100px] overflow-hidden
    ${item.active ? "active is_flipped " : ""}
    ${item.resolve ? "active is_flipped " : ""}
    `}
      onClick={() => HandelClickCard(item)}
    >
      {/* Bavcgrodun Shape */}
      <div className="background_shape shadow-sm front absolute z-[2] ">
        <img src={mark} className="w-[100%] h-[100%]  p-4 bg-[#1f3640] " />
      </div>
      {/* Image Shape */}

      <div className="background_image back">
        <img src={item.img} className="max-w-[100%]  max-h-[100%]" />
      </div>
    </div>
  );
}

export default GameCard;
