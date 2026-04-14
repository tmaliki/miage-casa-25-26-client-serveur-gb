// Première promesse : Résolue après 2s
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Première promesse résolue au bout de 2s")
    }, 2000)
});

// Deuxième promesse : Résolue après 3s
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Première promesse résolue au bout de 3s")
    }, 3000)
});

// Troisième promesse : Résolue après 1s
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Troisième promesse résolue au bout de 1s")
    }, 1000)
});

// Exécution : Utilisation de Promise.all
Promise.all([promise1, promise2, promise3])
.then((resultats) => {
    console.log("Toutes les promesses sont résolues : ", resultats);
})
.catch((erreur) => {
    console.error("Une des promesses a échoué : ", erreur);
});

