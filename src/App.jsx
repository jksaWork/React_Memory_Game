import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Board from "./components/Board";
import GameProvider from "./contexts/GameProvider";
function App() {
  return (
    <GameProvider>
      <Board />
    </GameProvider>
  );
}

export default App;
