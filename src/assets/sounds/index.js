import suceAudo from "./sccuess.wav";
import GameOver from "./gameover.wav";
import wrong from "./wrong.wav";
import audosrc from "./mixkit-arcade-retro-changing-tab-206.wav";
const audio = new Audio(audosrc);
const successAduo = new Audio(suceAudo);
const GameOverAudio = new Audio(GameOver);
const worngAudio = new Audio(wrong);

export default {
  worngAudio,
  GameOverAudio,
  audio,
  successAduo,
};
