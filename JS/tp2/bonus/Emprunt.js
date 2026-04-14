export class Emprunt {
    constructor(livre, abonne, ) {
        this.livre = livre;
        this.abonne = abonne;
        this.dateEmprunt = new Date();
        this.dateRetour = null;
    }

    afficherDetailsEmprunt() {
        console.log("****************Détails Emprunt****************")
        console.log("Livre :", this.livre)
        console.log("Abonne :", this.abonne)
        console.log("Date emprunt :", this.dateEmprunt)
        console.log("Date retour :", this.dateRetour)
        console.log("**********************************************")
    }

    estEnRetard() {
        // Durée d'emprunt autiorisée : 15jours max
        const dureeAutorisee = 15;

        // Date actuelle si l'emprunt n'a pas encore été retourné
        const dateDeReference = this.dateRetour ? this.dateRetour : new Date();
        const diffEnMillisecondes = dateDeReference - this.dateEmprunt;
        const diffEnJours = diffEnMillisecondes / (1000 * 60 * 60 * 24)

        return diffEnJours > dureeAutorisee;
    }
}