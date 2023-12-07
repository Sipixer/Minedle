import { Mobs } from "../data/mobs";
import { getTranslatedString } from "../utils/translation";

export const MobSuggest = (mob: Mobs[0], onClick: (mobId: string) => void) => {
  const mobName = getTranslatedString(mob.name);
  const container = document.createElement("button");
  container.classList.add("mobSuggest");
  container.appendChild(document.createTextNode(mobName));
  const mobImage = document.createElement("img");
  mobImage.src = `img/mobs/${mob.image}`;
  mobImage.alt = mobName;
  container.appendChild(mobImage);

  container.addEventListener("click", () => {
    onClick?.(mob.name.en);
  });

  return container;
};
