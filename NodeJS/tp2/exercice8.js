/**
 * Exercice 8 : Copier un fichier
 * Écrivez un programme Node.js qui copie le contenu d'un fichier « source.txt » vers un nouveau fichier « destination.txt ».
 */

const fs = require("fs");

fs.copyFile("source.txt", "destination.txt", (err) => {
  if (err) {
    console.error("Erreur lors de la copie du fichier :", err);
    return;
  }
  console.log("Fichier copié avec succès.");
});
