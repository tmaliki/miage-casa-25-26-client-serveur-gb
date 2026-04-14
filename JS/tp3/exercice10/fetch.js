// API : liste des todos
const listTodo = "https://jsonplaceholder.typicode.com/todos";

// API : détail d'un todo
const findTodo = "https://jsonplaceholder.typicode.com/todos/50";

const recupererDonnes = () => {
    fetch(listTodo) // Méthode GET
        .then((response) => {
            // console.log(response);
            if (!response.ok) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }
            return response.json(); // Convertit la réponse en JSON
        })
        .then((data) => {
            console.table(data) // affichage sous forme de table
        })
        .catch((err) => {
            console.error("Une erreur s'est produite :", err);
        })
        .finally(() => {
            console.log("Requête terminée.");
        })
}

// Appel de la fonction pour l'exécuter
recupererDonnes();
