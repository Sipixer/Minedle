import { URL } from "../utils/variables";

export type Mobs = {
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
}[];

export let mobs: Mobs = [];

fetch(URL + "public/mobs.json")
  .then((res) => res.json())
  .then((res) => (mobs = res))
  .catch((err) => console.log(err));
