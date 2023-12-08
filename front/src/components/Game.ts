import { i18n } from "i18next";
import { Attempts } from "./Attemps";
import { Guessing } from "./Guessing";

export const Game = async (i18next: i18n) => {
  const container = document.createElement("div");
  container.classList.add("game-container");
  const attemps = new Attempts(i18next);
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
