/**
 * Exercice 6 : Supprimer un fichier
 * Écrivez un programme Node.js qui supprime un fichier nommé "fichier_a_supprimer.txt".
 */

const fs = require("fs");

fs.unlink("fichier_a_supprimer.txt", (err) => {
  if (err) {
    console.error("Erreur lors de la suppression du fichier :", err);
    return;
  }
  console.log("Fichier supprimé avec succès.");
});
