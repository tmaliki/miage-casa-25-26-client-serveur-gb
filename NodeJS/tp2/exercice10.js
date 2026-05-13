/**
 * Exercice 10 : Obtenir les informations d'un fichier
 * Écrivez un programme Node.js qui affiche les informations (statistiques) d'un fichier nommé « informations.txt », telles que la taille, la date de modification, etc.
 */

const fs = require("fs");

fs.stat("hello.txt", (err, stats) => {
  if (err) {
    console.error("Erreur lors de l'obtention des informations du fichier :", err);
    return;
  }
  console.log("Informations du fichier :", stats);
});
