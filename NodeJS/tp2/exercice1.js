/**
 * Exercice 1 : Création de fichier
 * Écrivez un programme Node.js qui crée un nouveau fichier texte et y écrit "Hello, World !".
 */

const fs = require("fs");

// Chemin du fichier à créer
const filePath = "hello.txt";

// Contenu à écrire dans le fichier
const content = "Hello, World!";

// Écrire dans le fichier
fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error("Erreur lors de l'écriture dans le fichier :", err);
    return;
  }
  console.log("Fichier créé et contenu écrit avec succès.");
});
