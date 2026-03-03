// Déclaration d'une classe en JS
class Personne {
    constructor(n, a) {
        this.nom = n;
        this.age = a;
    }
}

// Instanciation de la classe Personne
// Création d'une instance de la classe Personne
// Création d'un objet de la classe Personne
const personne1 = new Personne("Alice", 30);

// Affichage des propriétés de l'objet personne1
console.log("Objet personne1 : ", personne1);
console.log("Nom : " + personne1.nom); // Affiche "Nom : Alice"
console.log("Age : " + personne1.age); // Affiche "Age : 30"