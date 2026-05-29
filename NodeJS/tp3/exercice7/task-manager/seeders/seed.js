// seeders/seed.js

require('dotenv').config();
const bcrypt = require('bcrypt');
const db = require('../config/db');

async function seed() {
    try {
        // ─────────────────────────────────────
        // Utilisateurs à créer
        // ─────────────────────────────────────
        const users = [
            {
                name: 'Alice Martin',
                email: 'alice@example.com',
                password: 'alice123456'
            },
            {
                name: 'Bob Dupont',
                email: 'bob@example.com',
                password: 'bob123456'
            },
            {
                name: 'Maliki TCHEROU',
                email: 'maliki@example.com',
                password: 'maliki123456'
            }
        ];

        // ─────────────────────────────────────
        // Insertion des utilisateurs
        // ─────────────────────────────────────
        for (const user of users) {
            // Hash du mot de passe
            const hashedPassword = await bcrypt.hash(user.password, 10);

            // Insertion SQL
            await db.execute(`
                INSERT INTO users (name, email, password)
                VALUES (?, ?, ?)`,
                [user.name, user.email, hashedPassword]
            );

            console.log(`Utilisateur créé : ${user.email}`);
        }

        // ─────────────────────────────────────
        // Insertion des tâches
        // ─────────────────────────────────────
        await db.execute(`
            INSERT INTO tasks (user_id, title, description, status) VALUES
            (1, 'Apprendre Node.js', 'Suivre le tutoriel officiel', 'in_progress'),
            (1, 'Créer une API REST', 'Avec Express et MySQL', 'pending'),
            (2, 'Lire la doc MySQL', 'Focus sur les jointures', 'done')
        `);

        console.log('Tâches créées');
        process.exit();
    } catch (error) {
        console.error('Erreur seed :', error.message);
        process.exit(1);
    }
}

seed();