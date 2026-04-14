// Création de la première promesse
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5)
    }, 2000)
});

// Création de la deuxième promesse
const promise2 = (valeur) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(valeur * 2); // multiplier la valeur par 2
        }, 1000)
    });
}

// Execution : chainage des promesses
promise1
.then((resultat1) => {
    console.log("Première promesse résolue avec : ", resultat1);
    return promise2(resultat1); // Appel de deuxième promesse avec le résultat de la première
})
.then((resultat2) => {
    console.log("Deuxième promesse résolue avec : ", resultat2);
})
.catch((erreur) => {
    console.error("Une erreur s'est produite : ", erreur);
})
