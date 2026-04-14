// Création d'une promesse
const maPromesse = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesse resolue avec succès !")
    }, 3000) // Délai de 3000ms = 3s
});

// Exécution de la promesse
maPromesse.then((message) => {
    console.log(message); // Affichage du message dans la console
});
