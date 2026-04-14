const geometrie = {
    aireCarre: (cote) => {
        if (cote <= 0) {
            throw new Error("Le côté doit être un nombre positif.");
        }
        return cote * cote;
    },

    perimetreCarre: (cote) => {
        if (cote <= 0) {
            throw new Error("Le côté doit être un nombre positif.");
        }
        return cote * 4;
    }
}

// Rendons exportable l'objet geometrie en utilisant commonjs
module.exports = { geometrie };
