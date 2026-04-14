// Déclaration de la variable de condition
let success = false;

// Création de la promesse
const promesse = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (success) {
            resolve("Promesse résolue avec succès !");
        } else {
            reject("Promesse rejetée (Echec) !");
        }
    }, 2000)
});

// Gestion de la promesse
promesse
.then((message) => {
    console.log("Succès :", message);
})
.catch((error) => {
    console.error("Error : ", error);
})
