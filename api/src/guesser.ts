import { Mobs, Mob } from "./utils/mobs";

export function checkGuess(
  mobToGuessInfo: Mob,
  mobId: string
): {
  status: number;
  content: object | string | MobGuessDiff;
} {
  const mobInfo = Mobs.findByID(mobId);
  console.log(mobInfo?.name.fr);
  if (!mobInfo) return { status: 400, content: "Mob not found" };
  if (!mobToGuessInfo) return { status: 400, content: "Mob not found" };
  const mobDiff = compareTwoMobs(mobInfo, mobToGuessInfo);
  return { status: 200, content: mobDiff };
}
function compareTwoMobs(guessedMob: Mob, realMob: Mob): MobGuessDiff {
  return {
    name: {
      en: guessedMob.name.en,
      fr: guessedMob.name.fr,
    },
    image: guessedMob.image,
    behaviour: compareMobDiff(guessedMob.behavior, realMob.behavior),
    health: compareMobDiff(guessedMob.health, realMob.health),
    damage: compareMobDiff(guessedMob.damage, realMob.damage),
    height: compareMobDiff(guessedMob.height, realMob.height),
    width: compareMobDiff(guessedMob.width, realMob.width),
    type: compareMobDiff(guessedMob.type, realMob.type),
    version: compareTwoVersions(guessedMob.version, realMob.version),
  };
}
function compareMobDiff(guessedMob: string | number, realMob: string | number) {
  if (guessedMob == realMob) return { compare: true, value: guessedMob };

  if (typeof guessedMob == "number" && typeof realMob == "number")
    return { compare: realMob - guessedMob, value: guessedMob };
  return { compare: false, value: guessedMob };
}

const versions = [
  "Classique 0.24 (14 août 2009)",
  "Alpha 1.0.0",
  "Alpha 1.0.11",
  "Alpha 1.0.17",
  "Beta 1.8",
  "Beta 1.9pre2",
  "Beta 1.9pre6",
  "1.0.0 (11w48a)",
  "1.2.1 (12w04a)",
  "1.2.1 (12w08a)",
  "1.4.2 (12w32a)",
  "1.4.2 (12w34a)",
  "1.4.2 (12w38a)",
  "1.6.1 (13w16a)",
  "1.6.2 (13w23a)",
  "1.7.4 (13w49a)",
  "1.8 (14w11a)",
  "1.8 (14w25a)",
  "1.8 (14w27a)",
  "1.9 (15w31a)",
  "1.9 (15w38a)",
  "1.10 (16w20a)",
  "1.11 (16w39a)",
  "1.12 (17w13a)",
  "1.12 (17w16a)",
  "1.13 (18w07a)",
  "1.13 (18w11a)",
  "1.14 (18w43a)",
  "1.14 (18w44a)",
  "1.14 (18w45a)",
  "1.14 (19w07a)",
  "1.15 (19w34a)",
  "1.16 (20w07a)",
  "1.16 (20w09a)",
  "1.16.2 (20w27a)",
  "1.17 (20w45a)",
  "1.17 (20w51a)",
  "1.19 (22w11a)",
  "1.19 (22w13a)",
  "1.19 (23w37a)",
  "1.20",
];

function compareTwoVersions(
  guessedVersion: string,
  realVersion: string
): MobDiff {
  const firstIndex = versions.indexOf(guessedVersion);
  const secondIndex = versions.indexOf(realVersion);

  if (firstIndex === -1 || secondIndex === -1) {
    // Gérer les cas où une version n'est pas trouvée dans le tableau
    return {
      compare: false,
      value: guessedVersion,
    };
  }

  return {
    compare: secondIndex - firstIndex,
    value: guessedVersion,
  };
}
type MobDiff = {
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
