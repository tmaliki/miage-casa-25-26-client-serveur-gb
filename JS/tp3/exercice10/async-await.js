// API : liste des todos
const listTodo = "https://jsonplaceholder.typicode.com/todos";

// API : détail d'un todo
const findTodo = "https://jsonplaceholder.typicode.com/todos/50";

// Utilisation de async/await
// Fonction asynchrone pour récupérer les données
const recupererDonnesAsyncAwait = async () => {
    try {
        const response = await fetch(listTodo); // Requête GET
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }

        const data = await response.json(); // Convertit la réponse en JSON
        console.table(data); // Affichage sous forme de table
    } catch (err) {
        console.error("Une erreur s'est produite :", err);
    } finally {
        console.log("Requête terminée.");
    }
}

// Appel de la fonction pour l'exécuter
recupererDonnesAsyncAwait();
