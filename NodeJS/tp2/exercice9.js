/**
 * Exercice 9 : Vérifier l'existence d'un fichier
 * Écrivez un programme Node.js qui vérifie si un fichier nommé « mon_fichier.txt » existe
 */

const fs = require("fs");

fs.access("hello.txt", fs.constants.F_OK, (err) => {
  console.log(fs.constants);
  if (err) {
    console.error("Le fichier n'existe pas.");
    return;
  }
  console.log("Le fichier existe.");
});

// solution 2
// const filePath = "hello.txt";

// // Vérifier l'existence du fichier de manière synchrone
// if (fs.existsSync(filePath)) {
//   console.log("Le fichier existe.");
// } else {
//   console.error("Le fichier n'existe pas !");
// }
