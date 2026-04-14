import { geometrie } from "./formules.js";
import { Personne } from "./personne.js";

try {
    // Test partie géometrie
    console.log(`Aire du carré de côté 5 : ${geometrie.aireCarre(5)}`);
    console.log(`Périmètre du carré de côté 5 : ${geometrie.perimetreCarre(5)}`);

    // Partie classe Personne
    const alice = new Personne("Alice", 30);
    alice.afficherDetails();
} catch (error) {
    console.error("Erreur détectée : ", error.message);
} finally {
    console.log("Fin des tests.");
}