import mobs from "../../public/mobs.json";

export type Mob = {
  name: {
    en: string;
    fr: string;
  };
  image: string;
  behavior: string;
  health: number;
  type: string;
  damage: number;
  height: number;
  width: number;
  version: string;
};
export class Mobs {
  static findByID(id: string) {
    return mobs.find((mob) => mob.name.en === id);
  }
  static getRandomMob() {
    return mobs[Math.floor(Math.random() * mobs.length)];
  }
}
