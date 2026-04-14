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

    // Méthode statique
    // data = {nom:"John", age:30}
    static creerPersonne(data) {
        // return new Personne(data.nom, data.age);
        return new this(data.nom, data.age);
    }
}

// Phase de test
const data = { nom : "Abalo", age: 30 }
const abalo = Personne.creerPersonne(data);
abalo.afficherDetails();