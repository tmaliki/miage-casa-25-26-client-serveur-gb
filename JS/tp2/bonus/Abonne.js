// Importer le module Personne (classe)
import { Personne } from "./Personne.js";
import { Emprunt } from "./Emprunt.js";

// La classe Abonne hérite de la classe Personne
export class Abonne extends Personne {
    constructor(matricule, nom, prenom, dateNaiss, email) {
        super(matricule, nom, prenom, dateNaiss);
        this.email = email;
    }

    // Polymorphisme (surcharge de la classe fille)
    afficherInfo() {
        console.log("****************Infos Abonne****************")
        console.log("Matricule :", this.matricule)
        console.log("Nom :", this.nom)
        console.log("Prénom :", this.prenom)
        console.log("Date naissance :", this.dateNaiss)
        console.log("Email :", this.email)
        console.log("**********************************************")
    }

    emprunterLivre(livre, bibliotheque) {
        if(livre.estDisponible()) { // vérifier la disponibilité du livre
            // Instanciation de la classe Emprunt
            const emprunt = new Emprunt(livre, this);

            // Ajout de l'emprunt dans la liste des emprunts
            bibliotheque.listeEmprunts.push(emprunt);

            // Mise à jour de lma quantité disponible (décrémentation)
            livre.qteDispo--;

            // Message
            console.log(`Livre ${livre.titre} (${livre.isbn}) emprunté par ${this.nom} ${this.prenom}`);
        } else {
            console.log("Emprunt impossible, car le livre n'est disponible")
        }
    }

    rendreLivre(livre, bibliotheque) {
        const indexEmprunt = bibliotheque.listeEmprunts.findIndex((elt, i) => elt.livre.isbn === livre.isbn);
        if(indexEmprunt !== -1) {
            // Mise à jour de la date de retour
            const emprunt = bibliotheque.listeEmprunts[indexEmprunt]
            emprunt.dateRetour = new Date();

            // Mise à de la quantité en stock
            livre.qteDispo++;

            // Message
            console.log(`Livre ${livre.titre} (${livre.isbn}) retourné par ${this.nom} ${this.prenom}`);
        } else {
            console.log("Emprunt introuvable !");
        }
    }

    afficherLivresEmpruntes(bibliotheque) {
        const listeEmprutsAbonne = bibliotheque.listeEmprunts.filter(elt => elt.abonne.matricule === this.matricule)

        console.log(`*********** Livres empruntés par ${this.prenom} ${this.nom} ***********`)
        if(listeEmprutsAbonne.length > 0) {
            console.table(listeEmprutsAbonne)
        } else {
            console.log("Aucun emprunt trouvé pour cet abonné !")
        }
        console.log("*****************************************")
    }
}
