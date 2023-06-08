import React, { memo } from "react";
import flat1 from "../assets/falt_image1.svg";
import CardArray, { items } from "../constants";
import { useGameContext } from "../contexts/GameProvider";

function FaltingImage() {
  const { screen } = useGameContext();
  const FrezedFlatingImage = ({ left, width, top }) => {
    return (
      <div
        className={`
      overflow-hidden absolute transition-all duration-[5000] animate-wiggle
      `}
        style={{
          width: width,
          top: top + "px",
          left: left + "px",
        }}
        key={Math.random()}
      >
        <img src={flat1} style={{ rotate: width + "deg" }} />
      </div>
    );
  };

  return (
    <div className="z-[1] blur-sm absolute top-0 left-0">
      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10].map((el) => {
        console.log("hello World");
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
      })} */}

      <FrezedFlatingImage top={300} left={200} width={500} />
      <FrezedFlatingImage top={100} left={300} width={400} />
      <FrezedFlatingImage top={10} left={1000} width={300} />
      <FrezedFlatingImage top={250} left={900} width={300} />
      <FrezedFlatingImage top={10} left={700} width={300} />
      <FrezedFlatingImage top={1} left={1} width={200} />
      <FrezedFlatingImage
        top={screen.height - 10}
        left={screen.width - 10}
        width={200}
      />
      <FrezedFlatingImage top={150} left={500} width={30} />
      <FrezedFlatingImage top={400} left={screen.width} width={400} />
    </div>
  );
}

export default memo(FaltingImage);
