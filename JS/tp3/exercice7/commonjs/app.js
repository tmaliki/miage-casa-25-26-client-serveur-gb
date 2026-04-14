const { geometrie } = require("./formules.js");
const { Personne } = require("./personne.js");

try {
    // Partie géométrie
    console.log(`Aire du carré de côté 5 : ${geometrie.aireCarre(5)}`);
    console.log(`Périmètre du carré de côté 5 : ${geometrie.perimetreCarre(5)}`);

    // Partie classe 
    const alice = new Personne("Alice", 30);
    alice.afficherDetails();
} catch (error) {
    console.error("Erreur détectée : ", error.message);
} finally {
    console.log("Fin des tests.");
}