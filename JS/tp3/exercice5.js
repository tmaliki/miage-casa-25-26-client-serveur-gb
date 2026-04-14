function lireFichier(nomFichier) {
    try {
        if (nomFichier !== "data.txt") {
            throw new Error("Fichier non trouvé");
        }
        console.log("Contenu du fichier : ...");
    } catch (error) {
        console.error("Erreur détectée : ", error.message);
    } finally {
        console.log("Fermeture de la ressource");
    }
}

// appel de la fonction
// lireFichier("dta.txt") // cas d'une erreur
lireFichier("data.txt") // cas sans erreur