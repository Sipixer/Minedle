import { i18n } from "i18next";
import { Attempts } from "./Attemps";
import { Guessing } from "./Guessing";
import { URL } from "../utils/variables";

export const Game = async (i18next: i18n) => {
  const container = document.createElement("div");
  container.classList.add("game-container");
  const gameId = await fetch(URL + "newGame", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => res.gameId);
  const attemps = new Attempts(i18next, gameId);
  container.appendChild(attemps.getContainer());
  container.appendChild(
    Guessing({
      i18next,
      onGuess: (mobId: string) => {
        attemps.addAttempt(mobId);
      },
    })
  );
  return container;
};
