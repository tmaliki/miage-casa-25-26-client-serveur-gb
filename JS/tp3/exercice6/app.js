// Phase de test

// Importation du module (operations.js)
import { 
    addition, 
    soustraction, 
    multiplication, 
    division 
} from "./operations.js";

import genererNombreAleatoire from "./utilitaires.js";

try {
    console.log("***** Partie des opérations *****");
    console.log(`Addition de (5 + 3) : ${addition(5, 3)}`);
    console.log(`Soustraction de (23 - 10) : ${soustraction(23, 10)}`);
    console.log(`Multiplication de (4 * 7) : ${multiplication(4, 7)}`);
    console.log(`Division de (20 / 4) : ${division(20, 4)}`); // pas d'erreur
    // console.log(`Division de (8 / 0) : ${division(8, 0)}`); // provoque une erreur

    console.log("***** Partie des nombres aléatoires *****");
    console.log(`Nombre aléatoire entre 1 et 10 : ${genererNombreAleatoire(1, 10)}`);
    console.log(`Nombre aléatoire entre 50 et 100 : ${genererNombreAleatoire(50, 100)}`);
    console.log(`Nombre aléatoire entre 1000 et 900 : ${genererNombreAleatoire(1000, 900)}`); // provoque une erreur
} catch (error) {
    console.error("Erreur détectée : ", error.message);
} finally {
    console.log("Fin des tests");
}
