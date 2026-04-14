function afficherLongueurChaine(chaine) {
    try {
        console.log(chaine.length);
    } catch (error) {
        console.error("Erreur déctectée : ", error.message) // Le message de l'erreur

        // Supplément
        console.error("Error name : ", error.name); // le nom de l'erreur
        console.error("Error stack : ", error.stack); // Le détails de l'erreur
        console.error("Error cause : ", error.cause); // la cause de l'erreur, disponible depuis ES2022
    }
}

// appel de la fonction
afficherLongueurChaine("Hello")