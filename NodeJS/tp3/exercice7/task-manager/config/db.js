// Connexion à la base de données mysql

// Charge les variables d'environnement depuis le fichier .env
require('dotenv').config();

// Récupération du module mysql2
const mysql = require('mysql2');

// Création du pool de connexions
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    // Convertir automatiquement les résultat en objets JS
    waitForConnections: true,
    connectionLimit: 10, // Maximum 10 connexions simultanées
    queueLimit: 0 // File d'attente illimité
});

// Promesse pour la gestion des requêtes
const db = pool.promise();

// Test de la connexion au démarrage
pool.getConnection((err, connection) => {
    if (err) {
        console.error("Erreur de connexion MySQL : ", err.message);
        return;
    }

    console.log("Connecté à MySQL avec succès !");
    connection.release(); // Libération de la connexion après le test
});

module.exports = db;
