import { i18n } from "i18next";
import { Button } from "./Button";

const LANGUAGES = ["en", "fr"];

export const LangSelector = (i18next: i18n) => {
  const container = document.createElement("div");

  container.appendChild(document.createTextNode(i18next.t("LangSelector")));

  const langContainer = document.createElement("div");
  updateLanguageButtons(i18next, langContainer);
  container.appendChild(langContainer);

  return container;
};

function updateLanguageButtons(i18next: i18n, container: HTMLElement) {
  const buttons = createLanguageButtons(i18next, () =>
    updateLanguageButtons(i18next, container)
  );
  container.innerHTML = "";
  buttons.forEach((button) => container.appendChild(button));
}

function createLanguageButtons(i18next: i18n, onChange: () => void) {
  return LANGUAGES.map((lang) => createLanguageButton(lang, i18next, onChange));
}

function createLanguageButton(
  lang: string,
  i18next: i18n,
  onChange: () => void
) {
  return Button({
    selected: i18next.language === lang,
    onClick: async () => {
      await i18next.changeLanguage(lang);
      onChange();
    },
    children: createFlagImage(lang),
  });
}

function createFlagImage(lang: string) {
  const imgElement = document.createElement("img");
  imgElement.src = `img/drapeau/${lang}.png`;
  imgElement.classList.add("flag");
  return imgElement;
}
