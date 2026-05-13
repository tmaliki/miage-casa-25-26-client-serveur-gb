/**
 * Exercice 7 : Lister les fichiers d'un répertoire
 * Écrivez un programme Node.js qui liste tous les fichiers et répertoires présents dans un répertoire nommé « mon_repertoire ».
 */

const fs = require("fs");

// "." ou "./"
const folderPath = "./";

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Erreur lors de la lecture du répertoire :", err);
    return;
  }
  console.log("Fichiers et répertoires :", files);
});
