const genererNombreAleatoire = (min, max) => {
    if (min >= max ) {
        throw new Error("Min doit être inférieur à Max");
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Rendons la fonction exoportable par défaut
export default genererNombreAleatoire;