import { useState } from "react";
import audios from "../assets/sounds/index";
import { HandelPreventClass } from "../constants";

const { worngAudio, GameOverAudio, audio, successAduo } = audios;
export const ClickCard = (
  item,
  CardItems,
  setCardItems,
  SelectItem,
  setSelectItem,
  EvenClick,
  setEvenClick,
  setGameOver
) => {
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
    if (SelectItem?.name == item.name) {
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
  CheckIfGameOver(CardItems, setGameOver);
  setEvenClick(!EvenClick);
};

export const CheckIfGameOver = (CardItems, setGameOver) => {
  // console.log();

  const unresolvecard = CardItems.find((el) => el.resolve == false);
  if (!unresolvecard) {
    GameOverAudio.play();
    setGameOver(true);
  }
  console.log(unresolvecard);
};
