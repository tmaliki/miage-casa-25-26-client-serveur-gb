/**
 * Exercice 3 : Créer un répertoire
 * Écrivez un programme Node.js qui crée un répertoire nommé « nouveau_repertoire ».
 */

const fs = require("fs");

fs.mkdir("nouveau_repertoire", (err) => {
  if (err) {
    console.error("Erreur lors de la création du répertoire :", err);
    return;
  }
  console.log("Répertoire créé avec succès.");
});
