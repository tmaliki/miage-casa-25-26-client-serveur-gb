class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }

    afficherDetails() {
        console.log(`Nom: ${this.nom}, Age: ${this.age} ans`);
    }
}

module.exports = { Personne };