/**
 * Exercice 5 : Renommer un fichier
 * Écrivez un programme Node.js qui renomme un fichier existant « ancien_nom.txt » en « nouveau_nom.txt ».
 */

const fs = require("fs");

fs.rename("ancien_nom.txt", "nouveau_nom.txt", (err) => {
  if (err) {
    console.error("Erreur lors du renommage du fichier :", err);
    return;
  }
  console.log("Fichier renommé avec succès.");
});
