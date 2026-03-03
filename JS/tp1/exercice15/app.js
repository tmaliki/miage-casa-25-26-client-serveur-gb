const fruits = ["Orange", "Banane", "Pomme", "Mangue", "Poire"];
const taille = fruits.length; // taille du tableau

console.log("********* Utilisation de la boucle while *********");
let i = 0;                     // initialisation de l'index
while (i < taille) {           // condition d'arrêt de la boucle
    console.log(fruits[i]);    // affichage de l'élément courant
    i++;                       // incrémentation de l'index
}

console.log("********* Utilisation de la boucle do..while *********");
let j = 0;               
do {
    console.log(fruits[j]);
    j++;
} while (j < taille);

console.log("********* Utilisation de la boucle for *********");
for (let k = 0; k < taille; k++) {
    console.log(fruits[k]);
}

console.log("********* Utilisation de la boucle for..of *********");
for (const elment of fruits) {
    console.log(elment);
}