// importation des packages/dependances
const express = require("express");
const server = express() // crée un serveur avec Express

// Création des routes
server.get("/", (req, res) => {
    res.send("Hello World!");
});

// Démarrage du serveur
const PORT = 3000;
server.listen(PORT, () => console.log(`Le serveur tourne sur : http://localhost:${PORT}`));
