import { i18n } from "i18next";
import { Mobs, mobs } from "../data/mobs";
import { getTranslatedString } from "../utils/translation";
import { Button } from "./Button";
import { goToMenu } from "../main";

export class Attempts {
  private container: HTMLDivElement;
  private i18next: i18n;
  private attempts = [] as string[];
  private table?: HTMLTableElement;

  private attemptsText: HTMLDivElement;

  constructor(i18next: i18n) {
    this.container = document.createElement("div");
    this.container.classList.add("attempts");
    this.i18next = i18next;

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

  public addAttempt(mobId: string) {
    this.attempts.push(mobId);
    this.renderNewAttempt(mobs.find((mob) => mob.id === mobId));
    this.renderAtemptText();
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

  private renderNewAttempt(mob?: Mobs[0]) {
    if (!mob) return;
    if (!this.table) {
      this.table = this.renderTable();
      this.container.appendChild(this.table);
    }

    const row = this.table.insertRow();
    imageCell(row.insertCell(), mob);
    mobCell(row.insertCell(), { compare: true, value: "hostile" });
    mobCell(row.insertCell(), { compare: false, value: "20" });
    mobCell(row.insertCell(), { compare: -1, value: "3" });
    mobCell(row.insertCell(), { compare: 0, value: "1.95" });
    mobCell(row.insertCell(), { compare: 1, value: "0.6" });
    mobCell(row.insertCell(), { compare: false, value: "monstre" });
    mobCell(row.insertCell(), {
      compare: 1,
      value: "Classique 0.24 (14 août 2009)",
    });

    this.table.appendChild(row);
    console.log(mob);
  }
}

function imageCell(imageCell: HTMLTableCellElement, mob: Mobs[0]) {
  const image = document.createElement("img");
  image.src = `img/mobs/${mob.image}`;
  image.alt = getTranslatedString(mob.name);
  image.title = getTranslatedString(mob.name);
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
