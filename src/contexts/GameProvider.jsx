import { useContext, createContext, useState, useEffect } from "react";
import cardArray, {
  HandelPreventClass,
  cartArray2,
  HardunSortedCardArray,
  unSortedCardArray,
} from "../constants";
import audios from "../assets/sounds/index";
import { ClickCard } from "./Logic";

const GameState = createContext();

function GameProvider({ children }) {
  const [screen, setScreen] = useState({ width: 0, height: 0 });

  const [HardCardItems, setHardCardItems] = useState(HardunSortedCardArray);
  const [CardItems, setCardItems] = useState(unSortedCardArray);
  const [BoardScreen, setBoardScreen] = useState(false);
  const [SelectItem, setSelectItem] = useState();
  const [gameOver, setGameOver] = useState();
  const [wincount, setWincount] = useState(0);
  const [username, setusername] = useState("Geust User");
  const [GameMode, setGameMode] = useState("easy");
  const [EvenClick, setEvenClick] = useState(false);
  const HandelClickCard = (item) => {
    if (GameMode == "easy")
      ClickCard(
        item,
        CardItems,
        setCardItems,
        SelectItem,
        setSelectItem,
        EvenClick,
        setEvenClick,
        setGameOver
      );
    if (GameMode == "hard")
      ClickCard(
        item,
        HardCardItems,
        setHardCardItems,
        SelectItem,
        setSelectItem,
        EvenClick,
        setEvenClick
      );
  };

  const HandelUserName = (e) => setusername(e.target.value);
  const CheckIfGameOver = () => {
    // console.log();

    const unresolvecard = CardItems.find((el) => el.resolve == false);
    if (!unresolvecard) {
      GameOverAudio.play();
      setGameOver(true);
    }
    console.log(unresolvecard);
  };

  const restartTheGame = () => {
    setGameOver(false);

    setWincount(wincount + 1);
    //     setCardItems(cardArray);
    const cards = CardItems.map((el) => {
      el.active = false;
      el.resolve = false;
      return el;
    })
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setCardItems([...cards]);
    console.log("Helo World ", CardItems);
  };
  const QuniteFromGame = () => {
    setGameOver(false);
    setBoardScreen(false);
  };
  useEffect(() => {
    const handelSize = (value) => {
      setScreen(value);
    };
    window.addEventListener("resize", () =>
      handelSize({ width: window.innerWidth, height: window.innerHeight })
    );
    handelSize({ width: window.innerWidth, height: window.innerHeight });
    //     console.log(screen, "from Application");
    //     window.addEventListener("resize", () => console.log(window.innerWidth));
  }, []);

  return (
    <GameState.Provider
      value={{
        name: "hello",
        screen,
        HandelClickCard,
        CardItems,
        gameOver,
        restartTheGame,
        username,
        HandelUserName,
        BoardScreen,
        setBoardScreen,
        QuniteFromGame,
        wincount,
        GameMode,
        setGameMode,
        HardCardItems,
      }}
    >
      {children}
    </GameState.Provider>
  );
}
export const useGameContext = () => useContext(GameState);

export default GameProvider;
