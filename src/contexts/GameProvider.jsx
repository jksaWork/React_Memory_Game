import { useContext, createContext, useState, useEffect } from "react";

const GameState = createContext();
function GameProvider({ children }) {
  const [screen, setScreen] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const handelSize = (value) => {
      console.log(value, "Form Native");
      setScreen(value);
    };
    window.addEventListener("resize", () =>
      handelSize({ width: window.innerWidth, height: window.innerHeight })
    );
    handelSize({ width: window.innerWidth, height: window.innerHeight });
    //     console.log(screen, "from Application");
    window.addEventListener("resize", () => console.log(window.innerWidth));
  }, []);

  return (
    <GameState.Provider
      value={{
        name: "hello",
        screen,
      }}
    >
      {children}
    </GameState.Provider>
  );
}
export const useGameContext = () => useContext(GameState);

export default GameProvider;
