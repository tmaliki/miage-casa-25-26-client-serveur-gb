export class Personne {
    constructor (matricule, nom, prenom, dateNaiss) {
        this.matricule = matricule;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaiss = dateNaiss;
    }

    afficherInfo() {
        console.log("****************Infos Personne****************")
        console.log("Matricule :", this.matricule)
        console.log("Nom :", this.nom)
        console.log("Prénom :", this.prenom)
        console.log("Date naissance :", this.dateNaiss)
        console.log("**********************************************")
    }
}

// test
// const p = new Personne("P001", "Doe", "John", "01/01/1990");
// p.afficherInfo();