import i18next from "i18next";

i18next.init({
  lng: "fr",
  debug: true,
  resources: {
    en: {
      translation: {
        LangSelector: "Language",
        hard: "Hard",
        normal: "Normal",
        easy: "Easy",
        DifficultySelector: "Difficulty:",
        StartGame: "Start Game",
        solo: "Single Player",
        multi: "Multiplayer",
        attempts: "Attempts {{count}}",
        mob_name: "Mob Name",
        reset: "Reset",
        go_to_menu: "Go to menu",
        stats: {
          behavior: "Behavior",
          health: "Health",
          damage: "Damage",
          height: "Height",
          width: "Width",
          type: "Type",
          version: "Version",
        },
      },
    },
    fr: {
      translation: {
        LangSelector: "Langue",
        hard: "Difficile",
        normal: "Normal",
        easy: "Facile",
        DifficultySelector: "Difficulté :",
        StartGame: "Lancer une partie",
        solo: "Un Joueur",
        multi: "Multijoueur",
        attempts: "Tentatives {{count}}",
        mob_name: "Nom du Mob",
        reset: "Réinitialiser",
        go_to_menu: "Retour au menu",
        stats: {
          behavior: "Comportement",
          health: "Vie",
          damage: "Dégats",
          height: "Hauteur",
          width: "Largeur",
          type: "Type",
          version: "Version",
        },
      },
    },
  },
});

export default i18next;
