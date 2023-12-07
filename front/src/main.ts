import {
  DifficultySelector,
  difficulty,
} from "./components/DifficultySelector";
import { Game } from "./components/Game";
import { LangSelector } from "./components/LangSelector";
import { StartGame } from "./components/StartGame";
import "./style.css";
import i18next from "./utils/i18n";

let rerenderTime = 0;

type GameStatus = {
  difficulty: "easy" | "normal" | "hard";
  status: "menu" | "guessing" | "win" | "loose";
  type: "solo" | "multi";
};

const gameStatus: GameStatus = {
  difficulty: "easy",
  status: "guessing",
  type: "solo",
};

const app = document.querySelector<HTMLDivElement>("#app");

rerender();

function startSolo() {
  gameStatus.type = "solo";
  gameStatus.status = "guessing";
  gameStatus.difficulty = difficulty;
  console.log("start solo", gameStatus);
  rerender();
}

function startMulti() {
  alert("Not implemented yet");
}

export function goToMenu() {
  gameStatus.status = "menu";
  rerender();
}

export function soloWin(attempts: number) {
  gameStatus.status = "win";
  alert(`You win in ${attempts} attempts`);
  rerender();
}

export function rerender() {
  rerenderTime++;
  if (!app) return;
  app.innerHTML = "";
  if (gameStatus.status === "menu") mainMenuRender(app);
  if (gameStatus.status === "guessing") gameRender(app);
  if (gameStatus.status === "win") mainMenuRender(app);
}

function mainMenuRender(app: HTMLDivElement) {
  const mainMenuComponents = [
    LangSelector(i18next),
    DifficultySelector(i18next),
    StartGame(i18next, { startSolo, startMulti }),
  ];
  mainMenuComponents.forEach((component) => app.appendChild(component));
}

async function gameRender(app: HTMLDivElement) {
  app.innerHTML = "";
  app.appendChild(await Game(i18next));
}

i18next.on("languageChanged", rerender);
