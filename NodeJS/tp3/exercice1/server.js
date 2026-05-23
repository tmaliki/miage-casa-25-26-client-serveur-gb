// importation du module http
const http = require('http');

// création du serveur
const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello word !");
});

// Démarrage du serveur qui écoute sur le port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server runing at http://localhost:${PORT}`)
});
