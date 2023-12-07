import { i18n } from "i18next";
import { MobSuggest } from "./MobSuggest";
import { mobs } from "../data/mobs";

type GuessingProps = {
  i18next: i18n;
  onGuess: (mobId: string) => void;
};

export const Guessing = ({ i18next, onGuess }: GuessingProps) => {
  const container = document.createElement("div");
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = i18next.t("mob_name");

  function onSuggestionClick(mobId: string) {
    input.value = "";
    renderSuggestions(suggestContainer, input.value, onSuggestionClick);
    onGuess(mobId);
  }

  const suggestContainer = document.createElement("div");
  suggestContainer.classList.add("suggestContainer");

  input.addEventListener("input", () => {
    renderSuggestions(suggestContainer, input.value, onSuggestionClick);
  });
  renderSuggestions(suggestContainer, input.value, onSuggestionClick);

  container.appendChild(input);

  container.appendChild(suggestContainer);

  return container;
};

function renderSuggestions(
  container: HTMLDivElement,
  value: string,
  onGuess: (mobId: string) => void
) {
  container.innerHTML = "";
  if (value.length === 0) return;

  const filteredSuggestions = mobs.filter((mob) =>
    Object.values(mob.name).some((name) =>
      name.toLowerCase().includes(value.toLowerCase())
    )
  );

  if (filteredSuggestions.length === 0) {
    container.appendChild(document.createTextNode("No suggestions"));
    return;
  }

  for (const suggestion of filteredSuggestions) {
    container.appendChild(MobSuggest(suggestion, onGuess));
  }
}
