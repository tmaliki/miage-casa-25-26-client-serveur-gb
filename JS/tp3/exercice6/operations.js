// Fonction pour faire l'addition (somme)
function addition(a, b) {
    return a + b;
}

// Fonction pour faire la soustraction (différence)
function soustraction(a, b) {
    return a - b;
}

// Fonction pour faire la multiplication (produit)
function multiplication(a, b) {
    return a * b;
}

// Fonction pour faire la division (quotient)
function division(a, b) {
    if (b === 0) {
        throw new Error("Division par zéro impossible.")
    }
    return a / b;
}

function testFantome() {
    console.log("Test fantôme");
}

// Rendons les fonctions exportable
export {
    addition,
    soustraction,
    multiplication,
    division
};
