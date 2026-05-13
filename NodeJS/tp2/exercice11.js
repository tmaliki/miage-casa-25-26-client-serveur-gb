/**
 * Exercice 11 : Écrire dans un fichier en mode ajout (append)
 * Écrivez un programme Node.js qui ajoute du contenu à la fin d'un fichier nommé « journal.txt ».
 */

const fs = require("fs");

fs.appendFile("hello.txt", "\nNouvelle entrée dans le journal.\n", (err) => {
  if (err) {
    console.error("Erreur lors de l'écriture dans le fichier :", err);
    return;
  }
  console.log("Contenu ajouté avec succès.");
});
