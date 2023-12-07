import { TranslatedString } from "../type/type";
import i18next from "./i18n";

export const getTranslatedString = (translatedString: TranslatedString) => {
  return (
    translatedString[i18next.language as keyof TranslatedString] ||
    translatedString.en
  );
};
