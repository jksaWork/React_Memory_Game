import { useContext, createContext, useState, useEffect } from "react";
import cardArray, { HandelPreventClass } from "../constants";
import audios from "../assets/sounds/index";

const GameState = createContext();

function GameProvider({ children }) {
  const { worngAudio, GameOverAudio, audio, successAduo } = audios;
  const [screen, setScreen] = useState({ width: 0, height: 0 });
  const unSortedCardArray = cardArray
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const [CardItems, setCardItems] = useState(unSortedCardArray);
  const [EvenClick, setEvenClick] = useState(true);
  const [BoardScreen, setBoardScreen] = useState(false);
  const [SelectItem, setSelectItem] = useState();
  const [gameOver, setGameOver] = useState();
  const [username, setusername] = useState("Geust User");

  const HandelClickCard = (item) => {
    // Handel Filbed Card
    HandelPreventClass();
    const cards = CardItems.map((el) => {
      if (item.key == el.key) {
        el.active = true;
        return el;
      }
      return el;
    });
    if (EvenClick) {
      audio.play();
      setSelectItem(item);
      setCardItems([...cards]);
    } else {
      if (SelectItem.name == item.name) {
        successAduo.play();
        SelectItem.resolve = item.resolve = true;
        const filterdCard = CardItems.filter((el) => el.name == item.name);
      } else {
        worngAudio.play();
      }
      //   Reverse All Items
      setTimeout(() => {
        const filpeditems = CardItems.map((el) => {
          el.active = false;
          return el;
        });
        setCardItems(filpeditems);
      }, 1000);
    }
    CheckIfGameOver();
    setEvenClick(!EvenClick);
  };
  //   HandelScreen()
  const HandelUserName = (e) => setusername(e.target.value);
  const CheckIfGameOver = () => {
    //     console.log(CardItems);
    const unresolvecard = CardItems.find((el) => el.resolve == false);
    if (!unresolvecard) {
      GameOverAudio.play();
      setGameOver(true);
    }
    console.log(unresolvecard);
  };

  const restartTheGame = () => {
    setGameOver(false);
    //     setCardItems(cardArray);
    const cards = CardItems.map((el) => {
      el.active = false;
      el.resolve = false;

      return el;
    });
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
      }}
    >
      {children}
    </GameState.Provider>
  );
}
export const useGameContext = () => useContext(GameState);

export default GameProvider;
