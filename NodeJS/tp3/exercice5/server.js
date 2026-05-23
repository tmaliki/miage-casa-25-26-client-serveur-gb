const express = require('express'); // importation du framework Express
const app = express();              // création de l'application Express
app.use(express.json());            // middleware pour formater le contenu du body en JSON

// Data users
const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
    { id: 4, name: "Maliki", email: "maliki@example.com" }
];

// Route racine
app.get("/", (req, res) => {
    res.json({ message : "Bienvenue sur l'API des utilisateurs" });
});

// Route pour récupérer tous les utilisateurs
app.get("/users", (req, res) => {
    res.status(200).json(users);
});

// Route avec paramètre
app.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    const user = users.find(u => u.id === parseInt(userId));
    if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    res.status(200).json(user);
});

// Erreur 404 pour les routes non trouvées
app.use((req, res) => {
    res.status(404).json({ message: "Route non trouvée" });
});

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Le serveur tourne sur : http://localhost:${PORT}`);
});
