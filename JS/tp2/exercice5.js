// Classe Mère
class Personne {
    #age; // L'attrubut age est privé

    constructor(n, a) {
        this.nom = n;
        this.#age = a;
    }

    // Méthode pour obtenir l'age
    getAge() {
        return this.#age;
    }

    setAge(newAge) {
        if (newAge > 0) {
            this.#age = newAge;
        } else {
            console.log("Veuillez entrer un âge valide.")
        }
    }

    // Ajout d'une méthode
    afficherDetails() {
        // console.log("Nom : "+ this.nom +", Age :"+ this.age +" ans");
        console.log(`Nom : ${this.nom}, Age : ${this.getAge()} ans`);
    }
}

// Phase de test
const john = new Personne("John Doe", 32);
john.afficherDetails();

// Définir un nouvel âge
john.setAge(33);
john.afficherDetails()

// Test avec un age invalide
john.setAge(-34);