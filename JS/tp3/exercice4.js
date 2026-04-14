function diviser(a, b) {
    try {
        if (b === 0) {
            // création d'une erreur personnalisée
            throw new Error("Division par zéro impossible !");
        }
        console.log(`Division de ${a} / ${b} = ${a / b}`);
    } catch (error) {
        console.error("Erreur détectée : ", error.message);
    }
}

// test de la fonction
diviser(10, 2); // devrait afficher le résultat de la division
diviser(10, 0); // devrait afficher une erreur