import { i18n } from "i18next";
import { Button } from "./Button";

const DIFFICULTIES = ["easy", "normal", "hard"] as const;
type Difficulty = (typeof DIFFICULTIES)[number];
export let difficulty: Difficulty = "normal";

export const DifficultySelector = (i18next: i18n) => {
  const container = document.createElement("div");
  container.classList.add("difficultySelector");

  container.appendChild(
    document.createTextNode(i18next.t("DifficultySelector"))
  );

  const difficultyContainer = document.createElement("div");
  updateDifficultyButtons(i18next, difficultyContainer);
  container.appendChild(difficultyContainer);

  return container;
};

function updateDifficultyButtons(i18next: i18n, container: HTMLElement) {
  const buttons = createDifficultyButtons(i18next, () =>
    updateDifficultyButtons(i18next, container)
  );
  container.innerHTML = "";
  buttons.forEach((button) => container.appendChild(button));
}

function createDifficultyButtons(i18next: i18n, onChange: () => void) {
  return DIFFICULTIES.map((difficulty) =>
    createDifficultyButton(difficulty, i18next, onChange)
  );
}

function createDifficultyButton(
  _difficulty: Difficulty,
  i18next: i18n,
  onChange: () => void
) {
  return Button({
    text: i18next.t(_difficulty),
    selected: difficulty === _difficulty,
    onClick: () => {
      difficulty = _difficulty;
      onChange();
    },
  });
}
