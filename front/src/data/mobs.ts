export const _mobs = [
  {
    name: "creeper",
    frenchName: "creeper",
    image: "creeper.png",
    behavior: "hostile",
    health: 20,
    type: "monstre",
    damage: {
      facile: "22",
      Normal: "43",
      Difficile: "64",
    },
    Récompenses: [
      "Poudre à canon",
      "Disque de musique (si tué par un squelette)",
    ],
    Hauteur: 1.7,
    Largeur: 0.6,
    firstAppearance: "Alpha 1.0.11",
  },
  {
    name: "zombie",
    frenchName: "zombie",
    image: "zombie.png",
    behavior: "hostile",
    health: 20,
    type: "monstre",
    damage: {
      facile: 2.5,
      Normal: 3,
      Difficile: 4.5,
    },
    Récompenses: ["Chair putréfiée"],
    Hauteur: 1.95,
    Largeur: 0.6,
    firstAppearance: "Classique 0.24 (14 août 2009)",
    spawn: ["Surface"],
    monde: ["Overworld"],
  },
  {
    name: "skeleton",
    frenchName: "squelette",
    image: "skeleton.png",
    behavior: "hostile",
    health: 20,
    type: "monstre",
    damage: {
      facile: "4",
      Normal: "4",
      Difficile: "5",
    },
    Récompenses: ["Flèche", "Os", "Arc"],
    Hauteur: 1.99,
    Largeur: 0.6,
    firstAppearance: "Alpha 1.0.0",
    spawn: ["Surface"],
    monde: ["Overworld"],
  },
  {
    name: "spider",
    frenchName: "araignée",
    image: "spider.png",
    behavior: "neutral",
    health: 16,
    type: "monstre",
    damage: {
      facile: 2,
      Normal: 2,
      Difficile: 3,
    },
    Récompenses: ["Ficelle", "Œil d'araignée"],
    Hauteur: 0.9,
    Largeur: 1.4,
    firstAppearance: "Alpha 1.0.0",
    spawn: ["Surface"],
    monde: ["Overworld"],
  },
  {
    name: "enderman",
    frenchName: "enderman",
    image: "enderman.png",
    behavior: "neutral",
    health: 40,
    type: "monstre",
    damage: {
      facile: 4.5,
      Normal: 7,
      Difficile: 10.5,
    },
    Récompenses: ["Perle de l'Ender"],
    Hauteur: 2.9,
    Largeur: 0.6,
    firstAppearance: "Beta 1.8",
    spawn: ["Surface"],
    monde: ["Overworld", "The End", "Nether"],
  },
  {
    name: "slime",
    frenchName: "slime",
    image: "slime.png",
    behavior: "passive",
    health: 16,
    type: "monstre",
    damage: {
      facile: 3,
      Normal: 4,
      Difficile: 6,
    },
    Récompenses: ["Boule de Slime"],
    Hauteur: "2.04",
    Largeur: "2.04",
    firstAppearance: "Alpha 1.0.0",
    spawn: ["Marais", "Marais fleuri"],
    monde: ["Overworld"],
  },
  {
    name: "ghast",
    frenchName: "ghast",
    image: "ghast.png",
    behavior: "hostile",
    health: 10,
    type: "monstre",
    damage: {
      facile: "9",
      Normal: "17",
      Difficile: "25",
    },
    Récompenses: ["Larme de Ghast", "Poudre à canon"],
    Hauteur: 4.0,
    Largeur: 4.0,
    firstAppearance: "Beta 1.9pre6",
    spawn: ["Terres Nether", "Vallée de Sable d'Âme", "Deltas de Basalte"],
    monde: ["Nether"],
  },
  {
    name: "blaze",
    frenchName: "blaze",
    image: "blaze.png",
    behavior: "hostile",
    health: 20,
    type: "monstre",
    damage: {
      facile: 4,
      Normal: 6,
      Difficile: 9,
    },
    Récompenses: ["Bâton de Blaze"],
    Hauteur: 1.8,
    Largeur: 0.6,
    firstAppearance: "1.0.0 (11w48a)",
    spawn: ["Forteresse du Nether"],
    monde: ["Nether"],
  },
  {
    name: "guardian",
    frenchName: "gardien",
    image: "guardian.png",
    behavior: "hostile",
    health: 30,
    type: "monstre",
    damage: {
      facile: "4",
      Normal: "6",
      Difficile: "9",
    },
    Récompenses: [
      "Morue crue",
      "Cristaux de prismarine",
      "Éclat de prismarine",
    ],
    Hauteur: 0.85,
    Largeur: 0.85,
    firstAppearance: "1.8 (14w25a)",
    spawn: ["Monuments océaniques"],
    monde: ["Overworld"],
  },
  {
    name: "cow",
    frenchName: "vache",
    image: "cow.png",
    behavior: "passive",
    health: 10,
    type: "animal",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: ["Cuir", "Bœuf cru"],
    Hauteur: 1.4,
    Largeur: 0.9,
    firstAppearance: "Alpha 1.0.0",
    monde: ["Overworld"],
    spawn: ["Surface"],
  },
  {
    name: "pig",
    frenchName: "cochon",
    image: "pig.png",
    behavior: "passive",
    health: 10,
    type: "animal",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: ["Côtelette de porc crue"],
    Hauteur: 0.9,
    Largeur: 0.9,
    firstAppearance: "Alpha 1.0.0",
    monde: ["Overworld"],
    spawn: ["Surface"],
  },
  {
    name: "chicken",
    frenchName: "poulet",
    image: "chicken.png",
    behavior: "passive",
    health: 4,
    type: "animal",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: ["Plume", "Poulet cru"],
    Hauteur: 0.7,
    Largeur: 0.4,
    firstAppearance: "Alpha 1.0.0",
    monde: ["Overworld"],
    spawn: ["Surface"],
  },
  {
    name: "sheep",
    frenchName: "mouton",
    image: "sheep.png",
    behavior: "passive",
    health: 8,
    type: "animal",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: ["Laine", "Mouton cru"],
    Hauteur: 1.3,
    Largeur: 0.9,
    firstAppearance: "Alpha 1.0.0",
    monde: ["Overworld"],
    spawn: ["Surface"],
  },
  {
    name: "endermite",
    frenchName: "endermite",
    image: "endermite.png",
    behavior: "hostile",
    health: 8,
    type: "monstre",
    damage: {
      facile: 2,
      Normal: 2,
      Difficile: 3,
    },
    Récompenses: [],
    Hauteur: 0.3,
    Largeur: 0.4,
    firstAppearance: "1.8 (14w11a)",
    spawn: ["Ender"],
    monde: ["The End"],
  },
  {
    name: "stray",
    frenchName: "vagabond",
    image: "stray.png",
    behavior: "hostile",
    health: 20,
    type: "monstre",
    damage: {
      facile: 5,
      Normal: 5,
      Difficile: 5,
    },
    Récompenses: ["Flèche", "Os"],
    Hauteur: 1.99,
    Largeur: 0.6,
    firstAppearance: "1.10 (16w20a)",
    spawn: ["Rivière Gelée", "Plaines Enneigées", "Pics de Glace"],
    monde: ["Overworld"],
  },
  {
    name: "vindicator",
    frenchName: "vindicteur",
    image: "vindicator.png",
    behavior: "hostile",
    health: 24,
    type: "monstre",
    damage: {
      facile: 7.5,
      Normal: 13,
      Difficile: 19.5,
    },
    Récompenses: ["Émeraude"],
    Hauteur: 1.95,
    Largeur: 0.6,
    firstAppearance: "1.11 (16w39a)",
    spawn: ["Avant-poste de pillards", "Raid", "Manoir"],
    monde: ["Overworld"],
  },
  {
    name: "phantom",
    frenchName: "fantôme",
    image: "phantom.png",
    behavior: "hostile",
    health: 20,
    type: "monstre",
    damage: {
      facile: 4,
      Normal: 6,
      Difficile: 9,
    },
    Récompenses: ["Membrane de Phantom"],
    Hauteur: 0.5,
    Largeur: 0.9,
    firstAppearance: "1.13 (18w07a)",
    spawn: ["Surface"],
    monde: ["Overworld"],
  },
  {
    name: "parrot",
    frenchName: "perroquet",
    image: "parrot.png",
    behavior: "passive",
    health: 6,
    type: "animal",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: ["Plume"],
    Hauteur: 1,
    Largeur: 0.5,
    firstAppearance: "1.12 (17w13a)",
    spawn: ["Jungle"],
    monde: ["Overworld"],
  },
  {
    name: "dolphin",
    frenchName: "dauphin",
    image: "dolphin.png",
    behavior: "neutral",
    health: 10,
    type: "animal",
    damage: {
      facile: 2.5,
      Normal: 3,
      Difficile: 4.5,
    },
    Récompenses: [],
    Hauteur: 0.6,
    Largeur: 0.9,
    firstAppearance: "1.13 (18w07a)",
    spawn: [
      "Océan Tiède",
      "Océan Tiède Profond",
      "Océan",
      "Océan Profond",
      "Océan Chaud",
    ],
    monde: ["Overworld"],
  },
  {
    name: "turtle",
    frenchName: "tortue",
    image: "turtle.png",
    behavior: "passive",
    health: 30,
    type: "animal",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: ["Herbe aquatique"],
    Hauteur: 0.4,
    Largeur: 1.2,
    firstAppearance: "1.13 (18w07a)",
    spawn: ["Plage"],
    monde: ["Overworld"],
  },
  {
    name: "panda",
    frenchName: "panda",
    image: "panda.png",
    behavior: "neutral",
    health: 20,
    type: "animal",
    damage: {
      facile: 4,
      Normal: 6,
      Difficile: 9,
    },
    Récompenses: ["Bambou"],
    Hauteur: 1.25,
    Largeur: 1.3,
    firstAppearance: "1.14 (18w43a)",
    spawn: ["Jungle", "Jungle de Bambous"],
    monde: ["Overworld"],
  },
  {
    name: "cave_spider",
    frenchName: "araignée de cave",
    image: "cave_spider.png",
    behavior: "neutral",
    health: 12,
    type: "monstre",
    damage: {
      facile: 2,
      Normal: 2,
      Difficile: 3,
    },
    Récompenses: ["Ficelle", "Œil d'araignée"],
    Hauteur: 0.5,
    Largeur: 0.7,
    firstAppearance: "Beta 1.8",
    spawn: ["Abri souterrain"],
    monde: ["Overworld"],
  },
  {
    name: "silverfish",
    frenchName: "poisson d'argent",
    image: "silverfish.png",
    behavior: "hostile",
    health: 8,
    type: "monstre",
    damage: {
      facile: 1,
      Normal: 1,
      Difficile: 1.5,
    },
    Récompenses: [],
    Hauteur: 0.3,
    Largeur: 0.4,
    firstAppearance: "Beta 1.8",
    spawn: ["Abri souterrain"],
    monde: ["Overworld"],
  },
  {
    name: "magma cube",
    frenchName: "cube de magma",
    image: "magma_cube.png",
    behavior: "hostile",
    health: 16,
    type: "monstre",
    damage: {
      facile: 4,
      Normal: 6,
      Difficile: 9,
    },
    Récompenses: ["Crème de Magma"],
    Hauteur: 2.04,
    Largeur: 2.04,
    firstAppearance: "Beta 1.9pre2",
    spawn: [
      "Terres Nether",
      "Deltas de Basalte",
      "Forteresse du Nether",
      "Vestige de Bastion",
    ],
    monde: ["Nether"],
  },
  {
    name: "shulker",
    frenchName: "shulker",
    image: "shulker.png",
    behavior: "hostile",
    health: 30,
    type: "monstre",
    damage: {
      facile: 4,
      Normal: 4,
      Difficile: 4,
    },
    Récompenses: ["Carapace de Shulker"],
    Hauteur: 1.0,
    Largeur: 1.0,
    firstAppearance: "1.9 (15w31a)",
    spawn: ["Cité de l'End"],
    monde: ["The End"],
  },
  {
    name: "wither_skeleton",
    frenchName: "wither squelette",
    image: "wither_skeleton.png",
    behavior: "hostile",
    health: 20,
    type: "monstre",
    damage: {
      facile: 5,
      Normal: 8,
      Difficile: 12,
    },
    Récompenses: ["Charbon", "Os", "Crâne de Wither squelette"],
    Hauteur: 2.4,
    Largeur: 0.7,
    firstAppearance: "1.4.2 (12w36a)",
    spawn: ["Forteresse du Nether"],
    monde: ["Nether"],
  },
  {
    name: "evoker",
    frenchName: "invoqueur",
    image: "evoker.png",
    behavior: "hostile",
    health: 24,
    type: "monstre",
    damage: {
      facile: 4,
      Normal: 6,
      Difficile: 9,
    },
    Récompenses: ["Totem d'immortalité", "Émeraude"],
    Hauteur: 1.95,
    Largeur: 0.6,
    firstAppearance: "1.11 (16w39a)",
    spawn: ["Manoir", "Raid"],
  },
  {
    name: "vex",
    frenchName: "vex",
    image: "vex.png",
    behavior: "hostile",
    health: 14,
    type: "monstre",
    damage: {
      facile: 5.5,
      Normal: 9,
      Difficile: 13.5,
    },
    Récompenses: ["Épée en fer"],
    Hauteur: 0.8,
    Largeur: 0.4,
    firstAppearance: "1.11 (16w39a)",
    spawn: ["Manoir", "Raid"],
    monde: ["Overworld"],
  },
  {
    name: "ravager",
    frenchName: "ravageur",
    image: "ravager.png",
    behavior: "hostile",
    health: 100,
    type: "monstre",
    damage: {
      facile: 7,
      Normal: 12,
      Difficile: 18,
    },
    Récompenses: [],
    Hauteur: 1.9,
    Largeur: 1.2,
    firstAppearance: "1.14 (18w43a)",
    spawn: ["Raid"],
    monde: ["Overworld"],
  },
  {
    name: "pillager",
    frenchName: "pillard",
    image: "pillager.png",
    behavior: "hostile",
    health: 24,
    type: "monstre",
    damage: {
      facile: 3.5,
      Normal: 4,
      Difficile: 4.5,
    },
    Récompenses: ["Arbalète", "Flèche"],
    Hauteur: 1.95,
    Largeur: 0.6,
    firstAppearance: "1.14 (18w43a)",
    spawn: ["Avant-poste de pillards", "Raid", "Patrouille de pillards"],
    monde: ["Overworld"],
  },
  {
    name: "ender dragon",
    frenchName: "ender dragon",
    image: "ender_dragon.png",
    behavior: "hostile",
    health: 200,
    type: "boss",
    damage: {
      facile: 6,
      Normal: 10,
      Difficile: 15,
    },
    Récompenses: ["œuf de dragon"],
    Hauteur: 8.0,
    Largeur: 16.0,
    firstAppearance: "1.0.0 (11w48a)",
    spawn: ["L'End"],
    monde: ["The End"],
  },
  {
    name: "illusioner",
    frenchName: "illusioniste",
    image: "illusioner.png",
    behavior: "hostile",
    health: 32,
    type: "monstre",
    damage: {
      facile: 8,
      Normal: 8,
      Difficile: 8,
    },
    Récompenses: ["Arc", "Flèche"],
    Hauteur: 1.95,
    Largeur: 0.6,
    firstAppearance: "1.12 (17w16a)",
  },
  {
    name: "piglin",
    frenchName: "piglin",
    image: "piglin.png",
    behavior: "neutral",
    health: 16,
    type: "monstre",
    damage: {
      facile: 5,
      Normal: 8,
      Difficile: 12,
    },
    Récompenses: ["Or", "Divers objets"],
    Hauteur: 1.95,
    Largeur: 0.6,
    firstAppearance: "1.16 (20w07a)",
    spawn: ["Terres Nether", "Forêt Pourpre", "Vestige de Bastion"],
    monde: ["Nether"],
  },
  {
    name: "hoglin",
    frenchName: "hoglin",
    image: "hoglin.png",
    behavior: "hostile",
    health: 40,
    type: "monstre",
    damage: {
      facile: 5,
      Normal: 8,
      Difficile: 12,
    },
    Récompenses: ["Côtelette de porc"],
    Hauteur: 1.4,
    Largeur: 1.3965,
    firstAppearance: "1.16 (20w07a)",
    spawn: ["Forêt Pourpre", "Vestige de Bastion"],
    monde: ["Nether"],
  },
  {
    name: "strider",
    frenchName: "arpenteur",
    image: "strider.png",
    behavior: "passive",
    health: 20,
    type: "monstre",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: ["Ficelle"],
    Hauteur: 1.7,
    Largeur: 0.9,
    firstAppearance: "1.16 (20w07a)",
    spawn: [
      "Mer de Lave",
      "Delta",
      "Terres Nether",
      "Forêt Pourpre",
      "Forêt Distordue",
      "Vallée de Sable",
      "Deltas de Basalte",
    ],
    monde: ["Nether"],
  },
  {
    name: "axolotl",
    frenchName: "axolotl",
    image: "axolotl.png",
    behavior: "neutral",
    health: 14,
    type: "animal",
    damage: {
      facile: 2,
      Normal: 2,
      Difficile: 2,
    },
    Récompenses: ["Poisson tropical"],
    Hauteur: 0.6,
    Largeur: 1.3,
    firstAppearance: "1.17 (20w51a)",
    spawn: ["Cavernes luxuriantes"],
    monde: ["Overworld"],
  },
  {
    name: "glow_squid",
    frenchName: "poulpe luisant",
    image: "glow_squid.png",
    behavior: "passive",
    health: 10,
    type: "animal",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: ["Poche d'encre luisante"],
    Hauteur: 0.8,
    Largeur: 0.8,
    firstAppearance: "1.17 (20w45a)",
    monde: ["Overworld"],
    spawn: ["Océan profond"],
  },
  {
    name: "goat",
    frenchName: "chèvre",
    image: "goat.png",
    behavior: "neutral",
    health: 10,
    type: "animal",
    damage: {
      facile: 1,
      Normal: 2,
      Difficile: 3,
    },
    Récompenses: ["Lait"],
    Hauteur: 1.3,
    Largeur: 0.9,
    firstAppearance: "1.17 (20w51a)",
    spawn: ["Pics Gelés", "Pics Dentelés", "Pentes Enneigées"],
    monde: ["Overworld"],
  },
  {
    name: "warden",
    frenchName: "warden",
    image: "warden.png",
    behavior: "hostile",
    health: 500,
    type: "monstre",
    damage: {
      facile: 16,
      Normal: 30,
      Difficile: 45,
    },
    Récompenses: ["Catalyseur de sculk"],
    Hauteur: 2.9,
    Largeur: 0.9,
    firstAppearance: "1.19 (22w11a)",
    monde: ["Overworld"],
    spawn: ["Grottes de Stalactites"],
  },
  {
    name: "frog",
    frenchName: "grenouille",
    image: "frog.png",
    behavior: "passive",
    health: 10,
    type: "animal",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: ["Boule de slime"],
    Hauteur: 0.5,
    Largeur: 0.5,
    firstAppearance: "1.19 (23w37a)",
    monde: ["Overworld"],
    spawn: ["Marais", "Marais fleuri"],
  },
  {
    name: "allay",
    frenchName: "allay",
    image: "allay.png",
    behavior: "passive",
    health: 20,
    type: "monstre",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: [],
    Hauteur: 0.6,
    Largeur: 0.6,
    firstAppearance: "1.19 (22w13a)",
    spawn: ["Avant-poste de pillards", "Manoir"],
    monde: ["Overworld"],
  },
  {
    name: "wither",
    frenchName: "wither",
    image: "wither.png",
    behavior: "hostile",
    health: 300,
    type: "boss",
    damage: {
      facile: 5,
      Normal: 8,
      Difficile: 12,
    },
    Récompenses: ["Étoile du Nether"],
    Hauteur: 3.5,
    Largeur: 0.9,
    firstAppearance: "1.4.2 (12w34a)",
    spawn: ["Joueur"],
    monde: ["Nether", "Overworld"],
  },
  {
    name: "wandering trader",
    frenchName: "marchand errant",
    image: "wandering_trader.png",
    behavior: "neutral",
    health: 20,
    type: "villageois",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: ["Laisse"],
    Hauteur: 1.95,
    Largeur: 0.6,
    firstAppearance: "1.14 (18w45a)",
    spawn: ["Surface"],
    monde: ["Overworld"],
  },
  {
    name: "drowned",
    frenchName: "noyé",
    image: "drowned.png",
    behavior: "hostile",
    health: 20,
    type: "monstre",
    damage: {
      facile: 6,
      Normal: 11,
      Difficile: 16,
    },
    Récompenses: ["Trident", "Chair putréfiée"],
    Hauteur: 1.95,
    Largeur: 0.6,
    firstAppearance: "1.13 (18w11a)",
    spawn: [
      "Rivière",
      "Rivière Gelée",
      "Océan Froid",
      "Océan Froid Profond",
      "Océan Gelé",
      "Océan Gelé Profond",
      "Océan Tiède",
      "Océan Tiède Profond",
      "Océan",
      "Océan Profond",
      "Océan Chaud",
      "Grottes de Stalactites",
    ],
    monde: ["Overworld"],
  },
  {
    name: "zoglin",
    frenchName: "zoglin",
    image: "zoglin.png",
    behavior: "hostile",
    health: 40,
    type: "monstre",
    damage: {
      facile: 3,
      Normal: 3,
      Difficile: 4.5,
    },
    Récompenses: ["Côtelette de porc"],
    Hauteur: 1.4,
    Largeur: 1.3965,
    firstAppearance: "1.16 (20w07a)",
    spawn: ["Terres Nether", "Forêt Pourpre", "Vestige de Bastion"],
    monde: ["Nether"],
  },
  {
    name: "bee",
    frenchName: "abeille",
    image: "bee.png",
    behavior: "neutral",
    health: 10,
    type: "animal",
    damage: {
      facile: 2,
      Normal: 2,
      Difficile: 3,
    },
    Récompenses: ["Miel"],
    Hauteur: 0.6,
    Largeur: 0.7,
    firstAppearance: "1.15 (19w34a)",
    spawn: [
      "Pré",
      "Plaine",
      "Plaine de Tournesols",
      "Marais de Mangrove",
      "Forêt de Fleurs",
      "Forêt",
      "Forêt de Bouleaux",
      "Forêt de Bouleaux Anciens",
      "Bosquet de Cerisiers",
    ],
    monde: ["Overworld"],
  },
  {
    name: "fox",
    frenchName: "renard",
    image: "fox.png",
    behavior: "neutral",
    health: 10,
    type: "animal",
    damage: {
      facile: 2,
      Normal: 2,
      Difficile: 3,
    },
    Récompenses: ["Baies", "Poulet"],
    Hauteur: 0.7,
    Largeur: 0.6,
    firstAppearance: "1.14 (19w07a)",
    spawn: ["Taïga enneigée", "Taïga"],
    monde: ["Overworld"],
  },
  {
    name: "iron_golem",
    frenchName: "golem de fer",
    image: "iron_golem.png",
    behavior: "neutral",
    health: 100,
    type: "protecteur",
    damage: {
      facile: 11.75,
      Normal: 21.5,
      Difficile: 32.25,
    },
    Récompenses: ["Lingots de fer", "Fleurs"],
    Hauteur: 2.7,
    Largeur: 1.4,
    firstAppearance: "1.2.1 (12w08a)",
    spawn: ["Village"],
    monde: ["Overworld"],
  },
  {
    name: "snow_golem",
    frenchName: "golem de neige",
    image: "snow_golem.png",
    behavior: "passive",
    health: 4,
    type: "protecteur",
    damage: {
      facile: 3,
      Normal: 3,
      Difficile: 3,
    },
    Récompenses: ["Boules de neige"],
    Hauteur: 1.9,
    Largeur: 0.7,
    firstAppearance: "Beta 1.9pre1",
    monde: ["Overworld"],
    spawn: ["Joueur", "Enderman"],
  },
  {
    name: "llama",
    frenchName: "lama",
    image: "llama.png",
    behavior: "neutral",
    health: 15,
    type: "animal",
    damage: {
      facile: 1,
      Normal: 1,
      Difficile: 1,
    },
    Récompenses: ["Laine", "Cuir"],
    Hauteur: 1.87,
    Largeur: 0.9,
    firstAppearance: "1.11 (16w39a)",
    spawn: [
      "Collines Balayées par le Vent",
      "Forêt Balayée par le Vent",
      "Collines Gravillonnées Balayées par le Vent",
      "Plateau de Savane",
    ],
    monde: ["Overworld"],
  },
  {
    name: "ocelot",
    frenchName: "ocelot",
    image: "ocelot.png",
    behavior: "passive",
    health: 10,
    type: "animal",
    damage: {
      facile: 3,
      Normal: 3,
      Difficile: 3,
    },
    Récompenses: ["Peau"],
    Hauteur: 0.7,
    Largeur: 0.6,
    firstAppearance: "1.2.1 (12w04a)",
    spawn: ["Jungle"],
    monde: ["Overworld"],
  },
  {
    name: "husk",
    frenchName: "zombie momifié",
    image: "husk.png",
    behavior: "hostile",
    health: 20,
    type: "monstre",
    damage: {
      facile: 2.5,
      Normal: 3,
      Difficile: 4.5,
    },
    Récompenses: ["Chair putréfiée"],
    Hauteur: 1.95,
    Largeur: 0.6,
    firstAppearance: "1.10 (16w20a)",
    spawn: ["Désert"],
    monde: ["Overworld"],
  },
  {
    name: "rabbit",
    frenchName: "lapin",
    image: "rabbit.png",
    behavior: "passive",
    health: 3,
    type: "animal",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: ["Peau de lapin", "Lapin cru"],
    Hauteur: 0.5,
    Largeur: 0.4,
    firstAppearance: "1.8 (14w27a)",
    monde: ["Overworld"],
    spawn: ["Surface"],
  },
  {
    name: "mooshroom",
    frenchName: "champimeuh",
    image: "mooshroom.png",
    behavior: "passive",
    health: 10,
    type: "animal",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: ["Champignon", "Steak"],
    Hauteur: 1.4,
    Largeur: 0.9,
    firstAppearance: "Beta 1.9pre1",
    spawn: ["Biomes de champs de champignons"],
    monde: ["Overworld"],
  },
  {
    name: "polar bear",
    frenchName: "ours polaire",
    image: "polar_bear.png",
    behavior: "neutral",
    health: 30,
    type: "animal",
    damage: {
      facile: 4,
      Normal: 6,
      Difficile: 9,
    },
    Récompenses: ["Poisson cru", "Saumon cru"],
    Hauteur: 1.4,
    Largeur: 1.4,
    firstAppearance: "1.10 (16w20a)",
    spawn: [
      "Plaines Enneigées",
      "Pics de Glace",
      "Océan Gelé",
      "Océan Gelé Profond",
    ],
    monde: ["Overworld"],
  },
  {
    name: "bat",
    frenchName: "chauve-souris",
    image: "bat.png",
    behavior: "passive",
    health: 6,
    type: "animal",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: [],
    Hauteur: 0.9,
    Largeur: 0.5,
    firstAppearance: "1.4.2 (12w38a)",
  },
  {
    name: "donkey",
    frenchName: "âne",
    image: "donkey.png",
    behavior: "passive",
    health: 30,
    type: "animal",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: ["Cuir", "Selle"],
    Hauteur: 1.6,
    Largeur: 1.3965,
    firstAppearance: "1.6.1 (13w16a)",
    spawn: ["Plaines", "Savanes", "Villages"],
    monde: ["Overworld"],
  },
  {
    name: "mule",
    frenchName: "mule",
    image: "mule.png",
    behavior: "passive",
    health: 30,
    type: "animal",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: ["Cuir", "Selle"],
    Hauteur: 1.6,
    Largeur: 1.4,
    firstAppearance: "1.6.1 (13w16a)",
    spawn: ["Plaines", "Savanes", "Villages"],
    monde: ["Overworld"],
  },
  {
    name: "cat",
    frenchName: "chat",
    image: "cat.png",
    behavior: "passive",
    health: 10,
    type: "animal",
    damage: {
      facile: 3,
      Normal: 3,
      Difficile: 3,
    },
    Récompenses: ["Poisson"],
    Hauteur: 0.7,
    Largeur: 0.6,
    firstAppearance: "1.2.1 (12w04a)",
    spawn: ["Villages"],
    monde: ["Overworld"],
  },
  {
    name: "horse",
    frenchName: "cheval",
    image: "horse.png",
    behavior: "passive",
    health: 30,
    type: "animal",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: ["Cuir", "Selle"],
    Hauteur: 1.6,
    Largeur: 1.4,
    firstAppearance: "1.6.1 (13w16a)",
    spawn: ["Plaines", "Savanes", "Villages"],
    monde: ["Overworld"],
  },
  {
    name: "skeleton_horse",
    frenchName: "cheval squelette",
    image: "skeleton_horse.png",
    behavior: "defensive",
    health: 15,
    type: "animal",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: ["Os"],
    Hauteur: 1.6,
    Largeur: 1.4,
    firstAppearance: "1.9 (15w38a)",
    spawn: ["Skeleton traps"],
    monde: ["Overworld"],
  },
  {
    name: "zombie_horse",
    frenchName: "cheval zombie",
    image: "zombie_horse.png",
    behavior: "passive",
    health: 15,
    type: "animal",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: ["Chair putréfiée"],
    Hauteur: 1.6,
    Largeur: 1.4,
    firstAppearance: "1.9 (15w38a)",
  },
  {
    name: "villager",
    frenchName: "villageois",
    image: "villager.png",
    behavior: "passive",
    health: 20,
    type: "villageois",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: [],
    Hauteur: 1.95,
    Largeur: 0.6,
    firstAppearance: "Beta 1.9pre1",
    spawn: ["Villages", "Igloo basement"],
    monde: ["Overworld"],
  },
  {
    name: "witch",
    frenchName: "sorcière",
    image: "witch.png",
    behavior: "hostile",
    health: 26,
    type: "monstre",
    damage: {
      facile: 6,
      Normal: 6,
      Difficile: 6,
    },
    Récompenses: ["Potions", "Poudre de redstone", "Bâtons"],
    Hauteur: 1.95,
    Largeur: 0.6,
    firstAppearance: "1.4.2 (12w38a)",
    monde: ["Overworld"],
    spawn: ["Huttes de sorcières"],
  },
  {
    name: "elder guardian",
    frenchName: "grand gardien",
    image: "elder_guardian.png",
    behavior: "hostile",
    health: 80,
    type: "monstre",
    damage: {
      facile: 5,
      Normal: 8,
      Difficile: 12,
    },
    Récompenses: [
      "Éponge mouillée",
      "Écaille de gardien",
      "Poisson cru",
      "Prisme marin",
    ],
    Hauteur: 1.9975,
    Largeur: 1.9975,
    firstAppearance: "1.8 (14w25a)",
    spawn: ["Monuments océaniques"],
    monde: ["Overworld"],
  },
  {
    name: "zombie villager",
    frenchName: "villageois zombie",
    image: "zombie_villager.png",
    behavior: "hostile",
    health: 20,
    type: "monstre",
    damage: {
      facile: 2.5,
      Normal: 3,
      Difficile: 4.5,
    },
    Récompenses: ["Pomme dorée"],
    Hauteur: 1.95,
    Largeur: 0.6,
    firstAppearance: "1.4.2 (12w32a)",
    spawn: ["Villages"],
    monde: ["Overworld"],
  },
  {
    name: "baby_zombie",
    frenchName: "bébé zombie",
    image: "baby_zombie.png",
    behavior: "hostile",
    health: 20,
    type: "monstre",
    damage: {
      facile: 2.5,
      Normal: 3,
      Difficile: 4.5,
    },
    Récompenses: ["Chair putréfiée"],
    Hauteur: 0.975,
    Largeur: 0.3,
    firstAppearance: "1.6.2 (13w23a)",
  },
  {
    name: "spider_jockey_skeleton",
    frenchName: "araignée chevauchée par un squelette",
    image: "spider_jockey_skeleton.png",
    behavior: "hostile",
    health: 36,
    type: "monstre",
    damage: {
      facile: "6",
      Normal: "6",
      Difficile: "8",
    },
    Récompenses: ["Ficelle", "Flèche", "Os"],
    Hauteur: 2.9,
    Largeur: 1.4,
    firstAppearance: "Alpha 1.0.17",
    spawn: ["Surface"],
    monde: ["Overworld"],
  },
  {
    name: "spider_jockey_wither_skeleton",
    frenchName: "araignée chevauchée par un Wither squelette",
    image: "spider_jockey_wither_skeleton.png",
    behavior: "hostile",
    health: 36,
    type: "monstre",
    damage: {
      facile: "7",
      Normal: "12",
      Difficile: "15",
    },
    Récompenses: ["Ficelle", "Flèche", "Os"],
    Hauteur: 2.9,
    Largeur: 1.4,
    firstAppearance: "Alpha 1.0.17",
    spawn: ["Surface"],
    monde: ["Overworld"],
  },
  {
    name: "chicken_jockey",
    frenchName: "poulet chevauchée par un zombie",
    image: "chicken_jockey.png",
    behavior: "hostile",
    health: 24,
    type: "monstre",
    damage: {
      facile: 2,
      Normal: 3,
      Difficile: 4,
    },
    Récompenses: ["Chair putréfiée", "Plume"],
    Hauteur: 1.975,
    Largeur: 0.3,
    firstAppearance: "1.7.4 (13w49a)",
    spawn: ["Surface"],
    monde: ["Overworld"],
  },
  {
    name: "Chicken Zombified Piglin Jockey",
    frenchName: "poulet chevauchée par un piglin zombifié",
    image: "chicken_zombified_piglin_jockey.png",
    behavior: "hostile",
    health: 24,
    type: "monstre",
    damage: {
      facile: 5,
      Normal: 8,
      Difficile: 12,
    },
    Récompenses: ["Chair putréfiée", "Plume"],
    Hauteur: 1.975,
    Largeur: 0.3,
    firstAppearance: "1.16 (20w09a)",
    monde: ["Nether"],
    spawn: ["Terres Nether", "Forêt Pourpre", "Forteresse du Nether"],
  },
  {
    name: "killer_bunny",
    frenchName: "lapin tueur",
    image: "killer_bunny.png",
    behavior: "hostile",
    health: 3,
    type: "animal",
    damage: {
      facile: 5,
      Normal: 8,
      Difficile: 12,
    },
    Récompenses: ["Peau de lapin", "Lapin cru"],
    Hauteur: 0.5,
    Largeur: 0.4,
    firstAppearance: "1.8 (14w27a)",
    spawn: ["Surface"],
    monde: ["Overworld"],
  },
  {
    name: "piglin brute",
    frenchName: "piglin brute",
    image: "piglin_brute.png",
    behavior: "hostile",
    health: 50,
    type: "monstre",
    damage: {
      facile: 7.5,
      Normal: 13,
      Difficile: 19.5,
    },
    Récompenses: ["Or", "Divers objets"],
    Hauteur: 1.95,
    Largeur: 0.6,
    firstAppearance: "1.16.2 (20w27a)",
    spawn: ["Vestige de Bastion"],
    monde: ["Nether"],
  },
  {
    name: "zombified piglin",
    frenchName: "piglin zombifié",
    image: "zombified_piglin.png",
    behavior: "neutral",
    health: 20,
    type: "monstre",
    damage: {
      facile: 5,
      Normal: 8,
      Difficile: 12,
    },
    Récompenses: ["Pépite d'or", "Chair putréfiée"],
    Hauteur: 1.95,
    Largeur: 0.6,
    firstAppearance: "1.16 (20w07a)",
    spawn: ["Terres Nether", "Forêt Pourpre", "Forteresse du Nether"],
    monde: ["Nether"],
  },
  {
    name: "wolf (tamed)",
    frenchName: "loup apprivoisé",
    image: "wolf_tamed.png",
    behavior: "protecteur",
    health: 20,
    type: "animal",
    damage: {
      facile: 4,
      Normal: 4,
      Difficile: 4,
    },
    Récompenses: [],
    Hauteur: 0.85,
    Largeur: 0.6,
    firstAppearance: "1.8 (14w27a)",
    spawn: ["Joueur"],
    monde: ["Overworld"],
  },
  {
    name: "wolf (Angry)",
    frenchName: "loup sauvage",
    image: "wolf_angry.png",
    behavior: "hostile",
    health: 8,
    type: "animal",
    damage: {
      facile: 3,
      Normal: 4,
      Difficile: 6,
    },
    Récompenses: [],
    Hauteur: 0.85,
    Largeur: 0.6,
    firstAppearance: "1.8 (14w27a)",
    spawn: [
      "Bosquet",
      "Taïga Enneigée",
      "Taïga de Pins Anciens",
      "Taïga d'Épicéas Anciens",
      "Taïga",
      "Forêt",
    ],
    monde: ["Overworld"],
  },
  {
    name: "camel",
    frenchName: "dromadaire",
    image: "camel.png",
    behavior: "passive",
    health: 32,
    type: "animal",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: [],
    Hauteur: 2.375,
    Largeur: 1.7,
    firstAppearance: "1.20",
    spawn: ["Désert", "Villages du désert"],
    monde: ["Overworld"],
  },
  {
    name: "cod",
    frenchName: "morue",
    image: "cod.png",
    behavior: "passive",
    health: 3,
    type: "animal",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: ["Morue crue"],
    Hauteur: 0.3,
    Largeur: 0.5,
    firstAppearance: "1.13 (18w08b)",
    spawn: [
      "Océan Froid",
      "Océan Froid Profond",
      "Océan Tiède",
      "Océan Tiède Profond",
      "Océan",
      "Océan Profond",
    ],
    monde: ["Overworld"],
  },
  {
    name: "salmon",
    frenchName: "saumon",
    image: "salmon.png",
    behavior: "passive",
    health: 3,
    type: "animal",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: ["Morue crue"],
    Hauteur: 0.4,
    Largeur: 0.7,
    firstAppearance: "1.13 (18w08b)",
    spawn: [
      "Rivière",
      "Rivière Gelée",
      "Océan Froid",
      "Océan Froid Profond",
      "Océan Gelé",
      "Océan Gelé Profond",
    ],
    monde: ["Overworld"],
  },
  {
    name: "sniffer",
    frenchName: "renifleur",
    image: "sniffer.png",
    behavior: "passive",
    health: 14,
    type: "animal",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: [],
    Hauteur: 1.75,
    Largeur: 1.9,
    firstAppearance: "1.13 (18w08b)",
    monde: ["Overworld"],
    spawn: ["Ruines sous-marines"],
  },
  {
    name: "squid",
    frenchName: "poulpe",
    image: "squid.png",
    behavior: "passive",
    health: 10,
    type: "animal",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: ["Poche d'encre"],
    Hauteur: 0.8,
    Largeur: 0.8,
    firstAppearance: "1.17 (20w45a)",
    monde: ["Overworld"],
    spawn: [
      "Rivière",
      "Rivière Gelée",
      "Océan Froid",
      "Océan Froid Profond",
      "Océan Gelé",
      "Océan Gelé Profond",
    ],
  },
  {
    name: "tadpole",
    frenchName: "têtard",
    image: "tadpole.png",
    behavior: "passive",
    health: 6,
    type: "animal",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: [],
    Hauteur: 0.3,
    Largeur: 0.4,
    firstAppearance: "1.19 (22w11a)",
    monde: ["Overworld"],
    spawn: ["Marais", "Marais de Mangrove"],
  },
  {
    name: "tropical fish",
    frenchName: "poisson-clown",
    image: "clownfish.png",
    behavior: "passive",
    health: 3,
    type: "animal",
    damage: {
      facile: 0,
      Normal: 0,
      Difficile: 0,
    },
    Récompenses: ["Poisson tropical", "Poudre d'os"],
    Hauteur: 0.4,
    Largeur: 0.5,
    firstAppearance: "1.13 (18w08b)",
    spawn: [
      "Marais de Mangrove",
      "Océan Tiède",
      "Océan Tiède Profond",
      "Océan Chaud",
      "Grottes Luxuriantes",
    ],
    monde: ["Overworld"],
  },
  {
    name: "pufferfish",
    frenchName: "poisson-globe",
    image: "pufferfish.png",
    behavior: "defensive",
    health: 3,
    type: "animal",
    damage: {
      facile: 2.5,
      Normal: 3,
      Difficile: 4.5,
    },
    Récompenses: ["Poisson-globe", "Poudre d'os"],
    Hauteur: 0.7,
    Largeur: 0.7,
    firstAppearance: "1.13 (18w08b)",
    spawn: ["Océan Tiède", "Océan Tiède Profond", "Océan Chaud"],
    monde: ["Overworld"],
  },
];

export type Mobs = typeof mobs;
export const mobs = _mobs.map((mob) => {
  return {
    id: mob.name,
    name: {
      fr: mob.frenchName,
      en: mob.name,
    },
    image: mob.image,
  };
});
