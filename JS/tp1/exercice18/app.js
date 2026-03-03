// Déclaration d'un objet
const personne = {
    nom: "TCHEROU",
    prenom: "Maliki",
    age: 34,

    // Méthode utilisant une fonction flèchée
    message1: () => {
        console.log(`Bonjour, je m'appelle ${personne.prenom} ${personne.nom} et j'ai ${personne.age} ans`)
    },

    // Méthode utilisant une fonction anonyme
    message2: function() {
        console.log(`Bonjour, je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans`)
    }
}

// test
personne.message1()

console.log("************")

personne.message2()
