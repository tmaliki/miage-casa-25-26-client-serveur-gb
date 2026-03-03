// Déclaration d'un tableau vide
let languages = [];

// Ajout d'élements dans le tableau
languages.push("JavaScript"); // position 0
languages.push("PHP");        // position 1
languages.push("Java");       // position 2
console.table(languages);

/**
 * Utilisation de la méthode splice :
 * Elle permet de modifier le contenu d'un tableau
 * en retirant, remplaçant ou ajoutant des éléments.
 * 
 * Syntaxe : splice(index, howMany, item1, item2, ..., itemN)
 * - index : position à partir de laquelle commencer les modifications
 * - howMany : nombre d'éléments à supprimer
 * - item1, item2, ..., itemN : éléments à ajouter
 */
languages.splice(1, 1)
console.log("Résultat après suppression :")
console.table(languages); // Supprime "PHP" à l'index 1