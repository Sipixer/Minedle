export type TranslatedString = {
  fr: string;
  en: string;
};

export type MobDiff = {
  compare: boolean | number;
  value: string | number;
};
type MobGuessDiff = {
  name: {
    en: string;
    fr: string;
  };
  image: string;
  behaviour: MobDiff;
  health: MobDiff;
  damage: MobDiff;
  height: MobDiff;
  width: MobDiff;
  type: MobDiff;
  version: MobDiff;
};
