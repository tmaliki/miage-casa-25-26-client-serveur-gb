// Classe Mère
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

// Classe Enfant qui hérite de la classe Mère
class Etudiant extends Personne {
    constructor(n, a, niv) {
        super(n, a); // Appel du constructeur de la classe Mère
        this.niveau = niv;
    }

    // Méthode héritée
    afficherNiveau() {
        console.log(`Niveau : ${this.niveau}`);
    }
}

// Création d'une instance de la classe Enfant
const john = new Etudiant("John", 20, "Licence");
john.afficherDetails();
john.afficherNiveau();