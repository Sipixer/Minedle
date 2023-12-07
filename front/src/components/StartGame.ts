import { i18n } from "i18next";
import { Button } from "./Button";

type StartGameProps = {
  startSolo: () => void;
  startMulti: () => void;
};

export const StartGame = (
  i18next: i18n,
  { startSolo, startMulti }: StartGameProps
) => {
  const container = document.createElement("div");
  container.classList.add("start-game");

  container.appendChild(document.createTextNode(i18next.t("StartGame")));
  const soloBtn = Button({
    text: i18next.t("solo"),
    onClick: startSolo,
    variant: "secondary",
  });
  const multiBtn = Button({
    text: i18next.t("multi"),
    onClick: startMulti,
    variant: "secondary",
  });

  const btnContainer = document.createElement("div");
  btnContainer.append(soloBtn, multiBtn);
  btnContainer.style.display = "flex";
  btnContainer.style.gap = "10px";
  container.appendChild(btnContainer);

  return container;
};
