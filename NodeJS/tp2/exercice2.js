/**
 * Exercice 2 : Lecture de fichier
 * Écrivez un script Node.js qui lit le contenu d'un fichier texte existant et l'affiche dans la console.
 */

const fs = require("fs");

// Chemin du fichier à lire
const filePath = "hello.txt";

// Lire le contenu du fichier
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Erreur lors de la lecture du fichier :", err);
    return;
  }
  console.log("Contenu du fichier :\n" + data);
});

// Chemin complet du fichier à lire
// const filePath2 = '/chemin/vers/mon_repertoire/sous_repertoire/fichier.txt';
// const filePath3 = path.join(__dirname, 'mon_repertoire', 'fichier.txt');
// const filePath4 = path.join(__dirname, 'mon_repertoire', 'sous_repertoire', 'fichier.txt');

// // Lire le contenu du fichier
// fs.readFile(filePath2, 'utf8', (err, data) => {
//   if (err) {
//     console.error('Erreur lors de la lecture du fichier :', err);
//     return;
//   }
//   console.log('Contenu du fichier :', data);
// });
