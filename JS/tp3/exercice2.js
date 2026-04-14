"use strict";

// création d'un objet
const personne = {
    nom: "Dupont",
    age: 30,
    ville: "Paris"
};
console.log("Avant suppression :", personne);

// supprission d'une propriété de m'objet
delete personne.ville;
console.log("Après suppression de la propriété 'ville' :", personne);

// déclaration d'une fonction
function afficher() {}
delete afficher; // Erreur : impossible de supprimer une fonction déclarée