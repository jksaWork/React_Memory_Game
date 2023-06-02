import React from "react";
import flat1 from "../assets/falt_image1.svg";
import CardArray, { items } from "../constants";
import { useGameContext } from "../contexts/GameProvider";

function FaltingImage() {
  const { screen } = useGameContext();

  return (
    <div class="z-[1] blur-sm absolute top-0 left-0">
      {CardArray.map((el) => {
        const rotate = items[Math.floor(Math.random() * items.length)];
        function randomIntFromInterval(min, max) {
          // min and max included
          return Math.floor(Math.random() * (max - min + 1) + min);
        }

        const width_number = randomIntFromInterval(1, 250);
        //    console.log(width_number);
        return (
          <div
            className={`
            overflow-hidden absolute transition-all duration-[5000] animate-wiggle
            `}
            style={{
              width: width_number,
              top: randomIntFromInterval(1, screen.height) + "px",
              left: randomIntFromInterval(1, screen.width) + "px",
            }}
            key={Math.random()}
          >
            <img src={flat1} style={{ rotate: width_number + "deg" }} />
          </div>
        );
      })}
    </div>
  );
}

export default FaltingImage;
