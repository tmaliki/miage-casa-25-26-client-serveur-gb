// Déclaration d'une classe en JS
class Personne {
    constructor(n, a) {
        this.nom = n;
        this.age = a;
    }

    // Ajout d'une méthode
    afficherDetails() {
        // console.log("Nom : "+ this.nom +", Age :"+ this.age +" ans");
        console.log(`Nom : ${this.nom}, Age : ${this.age} ans`);
    }
}

// Création d'une instance de la classe personne
const alice = new Personne("Alice", 30);
alice.afficherDetails();

const john = new Personne("John", 25);
john.afficherDetails();