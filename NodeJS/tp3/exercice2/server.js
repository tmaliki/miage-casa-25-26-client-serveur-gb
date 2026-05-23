// importation du package http
const http = require("http");

// création du serveur
const server = http.createServer((request, response) => {
    response.writeHead(200, { "content-type" : "text/plain" });

    const reqInfos = `
        Méthode : ${request.method}
        URL : ${request.url}
        Headers : ${JSON.stringify(request.headers, null, 2)}
    `;

    response.end(reqInfos);
});

// Démmarage du serveur
const PORT = 3000;
server.listen(PORT, () => console.log(`Serveur démarré, utiliser le lien : http://localhost:${PORT}`));
