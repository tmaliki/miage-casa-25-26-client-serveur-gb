export class Livre {
    constructor(isbn, titre, auteurs, anneePub, qteDispo) {
        this.isbn = isbn;
        this.titre = titre;
        this.auteurs = auteurs;
        this.anneePub = anneePub;
        this.qteDispo = qteDispo;
    }

    afficherInfo() {
        console.log("****************Infos Livre****************")
        console.log("ISBN :", this.isbn)
        console.log("Titre :", this.titre)
        console.log("Auteurs :", this.auteurs)
        console.log("Annéé de publication :", this.anneePub)
        console.log("Quantité :", this.qteDispo)
        console.log("**********************************************")
    }

    estDisponible() {
        return this.qteDispo > 0
    }
}