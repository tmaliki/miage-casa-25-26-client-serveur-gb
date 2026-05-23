const express = require('express');
const app = express();

// route principale (url racine)
app.get("/", (req, res) => {
    res.send(`Route principale`);
});

// route avec paramètre
app.get("/hello/:name", (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
});

// Erreur 404 (URl not found)
app.use((req, res) => {
    res.status(404).send("404 Not Found");
});

// Démarrage de serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Le serveur tourne sur : http://localhost:${PORT}`)
});