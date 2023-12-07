import { i18n } from "i18next";
import { getTranslatedString } from "../utils/translation";
import { Button } from "./Button";
import { goToMenu, soloWin } from "../main";
import { MobGuessDiff, TranslatedString } from "../type/type";
import { URL } from "../utils/variables";

export class Attempts {
  private container: HTMLDivElement;
  private i18next: i18n;
  private gameID: string;
  private attempts = [] as MobGuessDiff[];
  private table?: HTMLTableElement;

  private attemptsText: HTMLDivElement;

  constructor(i18next: i18n, gameId: string) {
    this.container = document.createElement("div");
    this.container.classList.add("attempts");
    this.i18next = i18next;
    this.gameID = gameId;

    const div = document.createElement("div");
    div.classList.add("attemptsHeader");
    const button = Button({
      text: i18next.t("reset"),
      onClick: goToMenu,
    });
    div.appendChild(button);
    this.attemptsText = document.createElement("p");
    this.attemptsText.textContent = this.i18next.t("attempts", {
      count: this.attempts.length,
      max: 10,
    });
    div.appendChild(this.attemptsText);
    this.container.appendChild(div);
  }

  private renderAtemptText() {
    this.attemptsText.textContent = this.i18next.t("attempts", {
      count: this.attempts.length,
      max: 10,
    });
  }

  public getContainer() {
    return this.container;
  }

  public async addAttempt(mobId: string) {
    const reponse = await fetch(URL + "guess", {
      method: "POST",
      body: JSON.stringify({ guess: mobId, sessionId: this.gameID }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!reponse.ok) {
      reponse.text().then((text) => {
        alert(text);
      });
    }
    const json = await reponse.json();
    if (json.guess) {
      soloWin(this.attempts.length + 1);
      return;
    }
    const diff = json as MobGuessDiff;
    this.renderNewAttempt(diff);
  }

  private renderTable() {
    const table = document.createElement("table");
    table.classList.add("table");
    const headerRow = table.insertRow();
    const headers = [
      "",
      this.i18next.t("stats.behavior"),
      this.i18next.t("stats.health"),
      this.i18next.t("stats.damage"),
      this.i18next.t("stats.height"),
      this.i18next.t("stats.width"),
      this.i18next.t("stats.type"),
      this.i18next.t("stats.version"),
    ];
    for (const headerText of headers) {
      const header = document.createElement("th");
      header.textContent = headerText;
      headerRow.appendChild(header);
    }

    return table;
  }

  private renderNewAttempt(diff?: MobGuessDiff) {
    if (!diff) return;
    this.attempts.push(diff);
    this.renderAtemptText();

    if (!this.table) {
      this.table = this.renderTable();
      this.container.appendChild(this.table);
    }

    const row = this.table.insertRow();
    imageCell(row.insertCell(), diff.image, diff.name);

    mobCell(row.insertCell(), diff.behaviour);
    mobCell(row.insertCell(), diff.health);
    mobCell(row.insertCell(), diff.damage);
    mobCell(row.insertCell(), diff.height);
    mobCell(row.insertCell(), diff.width);
    mobCell(row.insertCell(), diff.type);
    mobCell(row.insertCell(), diff.version);

    this.table.appendChild(row);
  }
}

function imageCell(
  imageCell: HTMLTableCellElement,
  _image: string,
  name: TranslatedString
) {
  const image = document.createElement("img");
  image.src = `img/mobs/${_image}`;
  image.alt = getTranslatedString(name);
  image.title = getTranslatedString(name);
  image.style.maxWidth = "120px";
  image.style.maxHeight = "120px";
  imageCell.appendChild(image);
}
function mobCell(
  mobCell: HTMLTableCellElement,
  {
    compare,
    value,
  }: {
    compare?: boolean | number;
    value?: string | number;
  }
) {
  mobCell.classList.add("mobCell");
  const mobDiv = document.createElement("div");
  mobDiv.classList.add("mobDiv");

  mobDiv.appendChild(document.createTextNode(value?.toString() || ""));

  if (compare === true || compare === 0) {
    mobCell.classList.add("green");
  } else {
    mobCell.classList.add("red");
    const indication = indicationArrow(compare);
    if (indication) mobDiv.appendChild(indication);
  }
  mobCell.appendChild(mobDiv);
}

function indicationArrow(compare?: boolean | number) {
  if (
    compare === undefined ||
    compare === true ||
    compare === 0 ||
    compare === false
  )
    return;
  const image = document.createElement("img");
  image.classList.add("indication");
  image.src = `img/icon/${compare > 0 ? "up" : "down"}arrow.png`;
  image.alt = compare ? "Trop élevé" : "Trop faible";
  return image;
}
