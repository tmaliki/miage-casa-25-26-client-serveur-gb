// Importer le module Personne (classe)
import { Personne } from "./Personne.js";

// La classe Auteur hérite de la classe Personne
export class Auteur extends Personne {
    constructor(matricule, nom, prenom, dateNaiss, nationnalite) {
        super(matricule, nom, prenom, dateNaiss);
        this.nationnalite = nationnalite;
    }

    // Polymorphisme (surcharge de la classe fille)
    afficherInfo() {
        console.log("****************Infos Auteur****************")
        console.log("Matricule :", this.matricule)
        console.log("Nom :", this.nom)
        console.log("Prénom :", this.prenom)
        console.log("Date naissance :", this.dateNaiss)
        console.log("Nationalité :", this.nationnalite)
        console.log("**********************************************")
    }

    listeLivresEcrites(bibliotheque) {
        // liste des livres de toute la bibliothèque
        const livres = bibliotheque.listeLivres;

        // Utilisation de la boucle for
        // let tab = []; // pour stocker les livres de l'auteur
        // for (let i = 0; i < livres.length; i++) {
        //     if (livres[i].auteurs.includes(this.matricule)) {
        //         tab.push(livres[i])
        //     }
        // }
        // return tab;

        // Utilisation de la fonction native filter
        return livres.filter((elt, i) => elt.auteurs.includes(this.matricule))
    }
}

// test
// const a = new Auteur("A001", "Hugo", "Victor", "26/02/1802", "Française");
// a.afficherInfo();