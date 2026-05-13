/**
 * Exercice 12 : Lire le contenu d'un répertoire récursivement
 * Écrivez un programme Node.js qui affiche tous les fichiers et sous-répertoires présents dans un répertoire nommé « mon_repertoire », y compris ceux des sous-répertoires.
 */

const fs = require("fs");
const path = require("path");

function listFiles(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error("Erreur lors de la lecture du répertoire :", err);
      return;
    }
    files.forEach((file) => {
      const filePath = path.join(directory, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error("Erreur lors de l'obtention des informations du fichier :", err);
          return;
        }
        if (stats.isDirectory()) {
          console.log(filePath + "/");
          listFiles(filePath); // Récursivement lister les fichiers dans ce sous-répertoire
        } else {
          console.log(filePath);
        }
      });
    });
  });
}

listFiles("./");
