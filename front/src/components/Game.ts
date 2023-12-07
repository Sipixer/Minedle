import { i18n } from "i18next";
import { Attempts } from "./Attemps";
import { Guessing } from "./Guessing";

export const Game = (i18next: i18n) => {
  const container = document.createElement("div");
  container.classList.add("game-container");
  const attemps = new Attempts(i18next);
  container.appendChild(attemps.getContainer());
  container.appendChild(
    Guessing({
      i18next,
      onGuess: (mobId: string) => {
        console.log("guess", mobId);
        attemps.addAttempt(mobId);
      },
    })
  );
  return container;
};
