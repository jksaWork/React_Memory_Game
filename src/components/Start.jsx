import { useGameContext } from "../contexts/GameProvider";
import FaltingImage from "./FaltingImage";

function Start() {
  const { HandelUserName, setBoardScreen, BoardScreen } = useGameContext();
  return (
    !BoardScreen && (
      <div className="w-full   relative h-screen overflow-hidden   bg-primary flex justify-center items-center">
        <FaltingImage />

        <div className="p-5  z-[3]  bg-primary drop-shadow- shadow-xl flex flex-col gap-3 px-3 ">
          <h3 className="text-center p-5">
            {" "}
            <span className="text-5xl font-mono  tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#f24699] to-[#14ffa5] font-extrabold">
              Memory Game
            </span>
          </h3>
          <div className="grid grid-cols-2 cursor-pointer px-3">
            <span className="p-3 text-center  bg-white text-primary rounded-sm bg-opacity-80">
              Easy
            </span>

            <span className="p-3 text-center  hover:bg-white rounded-sm bg-opacity-80">
              Hard
            </span>
          </div>
          <div className="m-4">
            <label>username:</label>
            <input
              onChange={HandelUserName}
              //   placeholder="username"
              className="w-full p-2  rounded-md bg-transparent"
            />
          </div>
          <div className="text-center">
            <button
              onClick={() => setBoardScreen(true)}
              className="w-[90%] bg-opacity-75  bg-[#f24699] text-white rounded-lg font-bold mx-3 p-2"
            >
              Paly Now
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default Start;
