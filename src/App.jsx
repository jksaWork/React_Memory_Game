import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Board from "./components/Board";
import Start from "./components/Start";
import GameProvider, { useGameContext } from "./contexts/GameProvider";
function App() {
  return (
    <GameProvider>
      <Board />
      <Start />
    </GameProvider>
  );
}

export default App;
