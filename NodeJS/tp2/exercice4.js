/**
 * Exercice 4 : Lire et afficher le contenu d'un fichier texte
 * Écrivez un programme Node.js qui lit le contenu d'un fichier texte nommé "mon_fichier.txt" et l'affiche dans la console.
 */

const fs = require("fs");

fs.readFile("mon_fichier.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Erreur lors de la lecture du fichier :", err);
    return;
  }
  console.log("Contenu du fichier :", data);
});
