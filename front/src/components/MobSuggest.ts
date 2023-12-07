import { TranslatedString } from "../type/type";
import { getTranslatedString } from "../utils/translation";

export const MobSuggest = (
  {
    id,
    name,
    image,
  }: {
    id: string;
    name: TranslatedString;
    image?: string;
  },
  onClick: (mobId: string) => void
) => {
  const mobName = getTranslatedString(name);
  const container = document.createElement("button");
  container.classList.add("mobSuggest");
  container.appendChild(document.createTextNode(mobName));
  const mobImage = document.createElement("img");
  mobImage.src = `img/mobs/${image}`;
  mobImage.alt = mobName;
  container.appendChild(mobImage);

  container.addEventListener("click", () => {
    onClick?.(id);
  });

  return container;
};
