let minecraftWords = [];

fetch("mobs.json")
  .then((response) => response.json())
  .then((data) => {
    setMinecraftWords(data);
    setChosenWord(getChosenWord());

    // Faites quelque chose avec minecraftWords
  })
  .catch((error) =>
    console.error("Erreur lors du chargement du JSON :", error)
  );

let guessedWords = []; // Stocker les mots déjà essayés
let attempts = 0; // Compter le nombre de tentatives
let language = "fr"; // Par défaut, la langue est en
let chosenWord = ""; // Stocker le mot choisi aléatoirement
let difficulty = "Normal"; // Par défaut, la difficulté est en facile
document.getElementById(language).style.backgroundColor = "#48464685";
document.getElementById(language).style.padding = "0.5%";
document.getElementById(language).style.borderRadius = "5px";

function choisirDifficulte(difficulte) {
  facileBtn = document.getElementById("facileBtn");
  normalBtn = document.getElementById("normalBtn");
  difficileBtn = document.getElementById("difficileBtn");

  if (difficulte === "facile") {
    facileBtn.classList.add("minecraft-btn-select");
    normalBtn.classList.remove("minecraft-btn-select");
    difficileBtn.classList.remove("minecraft-btn-select");
    difficulty = "facile";
    resetGame();
  } else if (difficulte === "Normal") {
    normalBtn.classList.add("minecraft-btn-select");
    facileBtn.classList.remove("minecraft-btn-select");
    difficileBtn.classList.remove("minecraft-btn-select");
    difficulty = "Normal";
    resetGame();
  } else if (difficulte === "Difficile") {
    difficileBtn.classList.add("minecraft-btn-select");
    facileBtn.classList.remove("minecraft-btn-select");
    normalBtn.classList.remove("minecraft-btn-select");
    difficulty = "Difficile";
    resetGame();
  }
}

function setChosenWord(data) {
  chosenWord = data;
}
function setMinecraftWords(data) {
  minecraftWords = data;
}

function changeLanguage(languageChosen) {
  //reset de l'ancien language
  document.getElementById(language).style.backgroundColor = "rgba(0, 0, 0, 0)";
  document.getElementById(language).style.padding = "0%";
  document.getElementById(language).style.borderRadius = "0px";

  document.getElementById(languageChosen).style.backgroundColor = "#48464685";
  document.getElementById(languageChosen).style.padding = "0.5%";
  document.getElementById(languageChosen).style.borderRadius = "5px";

  language = languageChosen;
  resetGame(); // Réinitialiser le jeu pour changer la langue
}

// Fonction pour suggérer des mots basés sur la lettre(s) entrée(s)
function suggestWords() {
  let input = document.getElementById("guessInput").value.toLowerCase();
  let suggestions = [];

  if (input.length === 0) {
    clearSuggestions();
    return;
  }

  for (let wordObj of minecraftWords) {
    if (language === "fr") {
      if (
        wordObj.frenchName.startsWith(input) &&
        !guessedWords.includes(wordObj.frenchName)
      ) {
        suggestions.push(wordObj);
      }
    } else {
      if (
        wordObj.name.startsWith(input) &&
        !guessedWords.includes(wordObj.name)
      ) {
        suggestions.push(wordObj);
      }
    }
  }

  if (suggestions.length === 0) {
    clearSuggestions();
    noSuggestions();
  } else {
    displaySuggestions(suggestions);
  }
}
// Fonction pour afficher qu'il n y a pas de suggestions
function noSuggestions() {
  let input = document.getElementById("guessInput").value.toLowerCase();
  let suggestions = [];

  if (input.length === 0) {
    clearSuggestions();
    return;
  }

  for (let wordObj of minecraftWords) {
    if (
      wordObj.name.startsWith(input) &&
      !guessedWords.includes(wordObj.name)
    ) {
      suggestions.push(wordObj);
    }
  }

  if (suggestions.length === 0) {
    document.getElementById("imageSuggestions").innerHTML = "Aucune suggestion";
  } else {
    displaySuggestions(suggestions);
  }
}

// Fonction pour effacer les suggestions d'images
function clearSuggestions() {
  document.getElementById("imageSuggestions").innerHTML = "";
}

// Afficher les suggestions de mots avec noms et images
function displaySuggestions(suggestions) {
  let imageSuggestions = document.getElementById("imageSuggestions");
  imageSuggestions.innerHTML = "";

  for (let wordObj of suggestions) {
    let suggestionDiv = document.createElement("div");
    suggestionDiv.classList.add("suggestion");
    suggestionDiv.addEventListener("click", function () {
      if (language === "fr") {
        selectSuggestion(wordObj.frenchName);
      } else {
        selectSuggestion(wordObj.name);
      }
      checkGuess();
      console.log(wordObj);
      compareWithMobToDiscover(wordObj);
    });

    let img = document.createElement("img");
    img.src = `img/minecraft/${wordObj.image}`;
    img.alt = language === "fr" ? wordObj.frenchName : wordObj.name;
    img.title = language === "fr" ? wordObj.frenchName : wordObj.name;
    img.style.maxWidth = "120px";
    img.style.maxHeight = "120px";

    let text = document.createElement("p");
    text.textContent = language === "fr" ? wordObj.frenchName : wordObj.name;

    suggestionDiv.appendChild(img);
    suggestionDiv.appendChild(text);
    imageSuggestions.appendChild(suggestionDiv);
  }
}

// Fonction pour clear l'input
function clearInput() {
  document.getElementById("guessInput").value = "";
  clearSuggestions();
}

// Fonction pour vérifier la supposition du mot complet
function checkGuess() {
  let guessedWord = document.getElementById("guessInput").value.toLowerCase();
  let numgif = Math.floor(Math.random() * 5) + 1; // Générer un nombre aléatoire entre 1 et 5
  if (guessedWord === chosenWord) {
    document.getElementById("result").innerHTML +=
      '<br><img class="gif" src="img/gif/win' + numgif + '.gif" alt="">'; // Ajouter une image de victoire
    document.getElementById(
      "result"
    ).innerHTML += `<br><p>Bravo ! Vous avez trouvé le mob en ${attempts} tentatives !</p>`; // Afficher le nombre de tentatives
    document.getElementById(
      "result"
    ).innerHTML += `<br> <button class="minecraft-btn" onclick="resetGame()">Rejouer</button> <hr />`; // Ajouter un bouton pour rejouer
    document.getElementById("guessInput").hidden = true; // Désactiver l'input
    document.getElementById("guessBtn").hidden = true; // Désactiver le bouton de soumission

    clearSuggestions();
  } else {
    guessedWords.push(guessedWord);
    attempts++; // Incrémenter le nombre de tentatives
    displayPreviousImages(); // Afficher les images des propositions précédentes
  }
  clearInput();
}

// Fonction pour obtenir le mot choisi aléatoirement
function getChosenWord() {
  let randomIndex = Math.floor(Math.random() * minecraftWords.length);
  if (language === "fr") {
    mot = minecraftWords[randomIndex].frenchName;
  } else {
    mot = minecraftWords[randomIndex].name;
  }
  //document.getElementById("Reponse").innerHTML = mot;

  return mot;
}
// Fonction pour sélectionner une suggestion et remplir l'input
function selectSuggestion(suggestion) {
  document.getElementById("guessInput").value = suggestion;
  clearSuggestions();
}

// Fonction pour afficher les images des propositions précédentes
function displayPreviousImages() {
  let previousImages = document.getElementById("previousImages");
  previousImages.innerHTML = "";

  let reversedGuessedWords = guessedWords.slice().reverse(); // Inversion de l'ordre des mots

  let table = document.createElement("table");
  //table.classList.add("previousWords");
  table.classList.add("table");
  table.classList.add("table-bordered");
  table.classList.add("table-hover");
  table.classList.add("table-striped");
  table.classList.add("text-center");

  // Créer une ligne pour les titres des colonnes
  let headerRow = table.insertRow();
  let imgHeader = document.createElement("th");
  imgHeader.textContent = " ";
  headerRow.appendChild(imgHeader);

  let behaviorHeader = document.createElement("th");
  behaviorHeader.textContent = "Comportement";
  headerRow.appendChild(behaviorHeader);

  let healthHeader = document.createElement("th");
  healthHeader.textContent = "Vie";
  headerRow.appendChild(healthHeader);

  let damageHeader = document.createElement("th");
  damageHeader.textContent = "Dégâts";
  headerRow.appendChild(damageHeader);

  let HauteurHeader = document.createElement("th");
  HauteurHeader.textContent = "Hauteur";
  headerRow.appendChild(HauteurHeader);

  let LargeurHeader = document.createElement("th");
  LargeurHeader.textContent = "Largeur";
  headerRow.appendChild(LargeurHeader);

  let typeHeader = document.createElement("th");
  typeHeader.textContent = "Type";
  headerRow.appendChild(typeHeader);

  let firstAppearanceHeader = document.createElement("th");
  firstAppearanceHeader.textContent = "Version d'apparition";
  headerRow.appendChild(firstAppearanceHeader);

  console.log(reversedGuessedWords);
  for (let word of reversedGuessedWords) {
    for (let wordObj of minecraftWords) {
      if (
        (language === "fr" && wordObj.frenchName === word) ||
        (language !== "fr" && wordObj.name === word)
      ) {
        let row = table.insertRow();

        // Colonne pour l'image
        let imgCell = row.insertCell();
        let img = document.createElement("img");
        img.src = `img/minecraft/${wordObj.image}`;
        img.alt = language === "fr" ? wordObj.frenchName : wordObj.name;
        img.title = language === "fr" ? wordObj.frenchName : wordObj.name;
        img.style.maxWidth = "120px";
        img.style.maxHeight = "120px";
        imgCell.appendChild(img);
        imgCell.classList.add("mobCell");

        // Colonne pour le comportement
        let behaviorCell = row.insertCell();
        behaviorCell.innerHTML =
          '<div class="mobDiv"><p>' + wordObj.behavior + "</p>";
        behaviorCell.classList.add("mobCell");

        // Colonne pour la santé
        let healthCell = row.insertCell();
        healthCell.innerHTML =
          '<div class="mobDiv"><p>' + wordObj.health + "</p>";
        healthCell.classList.add("mobCell");

        // Colonne pour les dégâts
        let damageCell = row.insertCell();
        let damage = 0;
        if (difficulty === "facile") {
          damage = wordObj.damage.facile;
        } else if (difficulty === "Normal") {
          damage = wordObj.damage.Normal;
        } else if (difficulty === "Difficile") {
          damage = wordObj.damage.Difficile;
        }
        damageCell.innerHTML = '<div class="mobDiv"><p>' + damage + "</p>"; // Remplacez "damage" par le nom de la propriété correspondante dans votre objet minecraftWords
        damageCell.classList.add("mobCell");

        // Colonne pour la Hauteur
        let HauteurCell = row.insertCell();
        HauteurCell.innerHTML =
          '<div class="mobDiv"><p>' + wordObj.Hauteur + "</p>";
        HauteurCell.classList.add("mobCell");

        // Colonne pour la Largeur
        let LargeurCell = row.insertCell();
        LargeurCell.innerHTML =
          '<div class="mobDiv"><p>' + wordObj.Largeur + "</p>";
        LargeurCell.classList.add("mobCell");

        // Colonne pour le type
        let typeCell = row.insertCell();
        typeCell.innerHTML = '<div class="mobDiv"><p>' + wordObj.type + "</p>";
        typeCell.classList.add("mobCell");

        // Colonne pour la version d'apparition
        let firstAppearanceCell = row.insertCell();
        firstAppearanceCell.innerHTML =
          '<div class="mobDiv"><p>' + wordObj.firstAppearance + "</p>";
        firstAppearanceCell.classList.add("mobCell");

        // Comparer la suggestion avec le mob à découvrir
        compareWithMobToDiscover(
          wordObj,
          behaviorCell,
          healthCell,
          HauteurCell,
          LargeurCell,
          typeCell,
          damageCell,
          firstAppearanceCell
        );

        break;
      }
    }
  }

  previousImages.appendChild(table);
}

// Fonction pour réinitialiser le jeu
function resetGame() {
  guessedWords = [];
  document.getElementById("result").innerHTML = "";
  document.getElementById("previousImages").innerHTML = "";
  document.getElementById("guessInput").hidden = false; // Désactiver l'input
  document.getElementById("guessBtn").hidden = false; // Désactiver le bouton de soumission
  chosenWord = getChosenWord();
  attempts = 0;
  clearInput();
}

function compareWithMobToDiscover(
  suggestion,
  behaviorCell,
  healthCell,
  HauteurCell,
  LargeurCell,
  typeCell,
  damageCell,
  firstAppearanceCell
) {
  let mobToDiscover = getMobToDiscover(); // Obtenez le mob à découvrir (le mob choisi aléatoirement)

  // Assurez-vous que vous avez une suggestion valide et le mob à découvrir
  if (suggestion && mobToDiscover) {
    if (suggestion.behavior !== mobToDiscover.behavior) {
      behaviorCell.classList.add("red");
      behaviorCell.innerHTML += "</div>";
    } else {
      behaviorCell.classList.add("green");
      behaviorCell.innerHTML += "</div>";
    }

    if (suggestion.health !== mobToDiscover.health) {
      healthCell.classList.add("red");
      if (suggestion.health < mobToDiscover.health) {
        healthCell.innerHTML +=
          '<img src="img/icon/uparrow.png" class="indication" alt="Vies trop faible">'; // Santé trop faible
      } else {
        healthCell.innerHTML +=
          '<img src="img/icon/downarrow.png" class="indication" alt="Vies trop élevés">'; // Santé trop élevée
      }
      healthCell.innerHTML += "</div>";
    } else {
      healthCell.classList.add("green");
      healthCell.innerHTML += "</div>";
    }

    if (suggestion.Hauteur !== mobToDiscover.Hauteur) {
      HauteurCell.classList.add("red");
      if (suggestion.Hauteur < mobToDiscover.Hauteur) {
        HauteurCell.innerHTML +=
          '<img src="img/icon/uparrow.png" class="indication" alt="Hauteur trop faible">'; // Hauteur trop faible
      } else {
        HauteurCell.innerHTML +=
          '<img src="img/icon/downarrow.png" class="indication" alt="Hauteur trop élevés">'; // Hauteur trop élevée
      }
      HauteurCell.innerHTML += "</div>";
    } else {
      HauteurCell.classList.add("green");
      HauteurCell.innerHTML += "</div>";
    }

    if (suggestion.Largeur !== mobToDiscover.Largeur) {
      LargeurCell.classList.add("red");
      if (suggestion.Largeur < mobToDiscover.Largeur) {
        LargeurCell.innerHTML +=
          '<img src="img/icon/uparrow.png" class="indication" alt="Largeur trop faible">'; // Largeur trop faible
      } else {
        LargeurCell.innerHTML +=
          '<img src="img/icon/downarrow.png" class="indication" alt="Largeur trop élevés">'; // Largeur trop élevée
      }
      LargeurCell.innerHTML += "</div>";
    } else {
      LargeurCell.classList.add("green");
      LargeurCell.innerHTML += "</div>";
    }

    if (suggestion.type !== mobToDiscover.type) {
      typeCell.classList.add("red");
      typeCell.innerHTML += "</div>";
    } else {
      typeCell.classList.add("green");
      typeCell.innerHTML += "</div>";
    }

    if (difficulty === "facile") {
      damageSugest = suggestion.damage.facile;
      damageToDiscover = mobToDiscover.damage.facile;
    } else if (difficulty === "Normal") {
      damageSugest = suggestion.damage.Normal;
      damageToDiscover = mobToDiscover.damage.Normal;
    } else if (difficulty === "Difficile") {
      damageSugest = suggestion.damage.Difficile;
      damageToDiscover = mobToDiscover.damage.Difficile;
    }

    if (damageSugest !== damageToDiscover) {
      //damageCell.style.backgroundColor = "red"; // Mauvaise correspondance pour le type
      damageCell.classList.add("red");
      if (damageSugest < damageToDiscover) {
        damageCell.innerHTML +=
          '<img src="img/icon/uparrow.png" class="indication" alt="Dégats trop faible">';
      } else {
        damageCell.innerHTML +=
          '<img src="img/icon/downarrow.png" class="indication" alt="Dégâts trop élevés">'; //
      }
      damageCell.innerHTML += "</div>";
    } else {
      damageCell.classList.add("green");
      damageCell.innerHTML += "</div>";
      //damageCell.style.backgroundColor = "green"; // Correspondance pour le type
    }

    if (suggestion.firstAppearance !== mobToDiscover.firstAppearance) {
      firstAppearanceCell.classList.add("red");
      const comparison = compareVersions(
        suggestion.firstAppearance,
        mobToDiscover.firstAppearance
      );
      if (comparison === null) {
        firstAppearanceCell.textContent += "(version inconnue)"; // Gérer les versions inconnues
      } else if (comparison < 0) {
        firstAppearanceCell.innerHTML +=
          '<img src="img/icon/uparrow.png" class="indication" alt="Version trop tôt">'; // Version d'apparition trop tôt
      } else if (comparison > 0) {
        firstAppearanceCell.innerHTML +=
          '<img src="img/icon/downarrow.png" class="indication" alt="Version trop tard"> '; // Version d'apparition trop tard
      } else {
        firstAppearanceCell.textContent += " (même version)"; // Versions identiques
      }
      firstAppearanceCell.innerHTML += "</div>";
    } else {
      firstAppearanceCell.classList.add("green");
      firstAppearanceCell.innerHTML += "</div>";
    }
  }
}

function getMobToDiscover() {
  if (language === "fr") {
    for (let wordObj of minecraftWords) {
      if (wordObj.frenchName === chosenWord) {
        return wordObj;
      }
    }
  } else {
    for (let wordObj of minecraftWords) {
      if (wordObj.name === chosenWord) {
        return wordObj;
      }
    }
  }
}

function compareVersions(firstVersion, secondVersion) {
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

  const firstIndex = versions.indexOf(firstVersion);
  const secondIndex = versions.indexOf(secondVersion);

  if (firstIndex === -1 || secondIndex === -1) {
    // Gérer les cas où une version n'est pas trouvée dans le tableau
    return null;
  }

  if (firstIndex < secondIndex) {
    return -1;
  } else if (firstIndex > secondIndex) {
    return 1;
  } else {
    return 0;
  }
}

//voir tout les mobs

let allMobsDisplayed = false;

function displayAllMobs() {
  let imageSuggestions = document.getElementById("imageSuggestions");
  imageSuggestions.innerHTML = "";

  if (allMobsDisplayed) {
    allMobsDisplayed = false;
  } else {
    minecraftWords.forEach((mob) => {
      if (!guessedWords.includes(mob.name)) {
        let suggestionDiv = document.createElement("div");
        suggestionDiv.classList.add("suggestion");
        suggestionDiv.addEventListener("click", function () {
          selectSuggestion(language === "fr" ? mob.frenchName : mob.name);
          checkGuess();
          compareWithMobToDiscover(mob);
        });

        let img = document.createElement("img");
        img.src = `img/minecraft/${mob.image}`;
        img.alt = language === "fr" ? mob.frenchName : mob.name;
        img.title = language === "fr" ? mob.frenchName : mob.name;
        img.style.maxWidth = "120px";
        img.style.maxHeight = "120px";

        let text = document.createElement("p");
        text.textContent = language === "fr" ? mob.frenchName : mob.name;

        suggestionDiv.appendChild(img);
        suggestionDiv.appendChild(text);
        imageSuggestions.appendChild(suggestionDiv);
      }
    });

    allMobsDisplayed = true;
  }
}
