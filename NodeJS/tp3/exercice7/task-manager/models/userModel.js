// Le modèle contient uniquement les interactions avec la DB.
// Pas de logique métier ici, juste des requêtes.

// connexion à la base de données
const db = require("../config/db");

const UserModel = {
    // Récupérer tous les utilisateurs
    async findAll() {
        // on exclut volontairement le champ "password" du select
        const [rows] = await db.query(`
            SELECT id, name, email, created_at, updated_at
            FROM users
            ORDER BY id ASC`
        );
        return rows;
    },

    // Trouver un utilisateur par son id
    async findById(id) {
        const [rows] = await db.query(
            `SELECT id, name, email, created_at, updated_at
            FROM users
            WHERE id = ?`,
            [id]);
        return rows[0];
    },

    // Trouver un utilisateur par son email
    async findByEmail(email) {
        const [rows] = await db.query(
            `SELECT *
            FROM users
            WHERE email = ?`,
            [email]);
        return rows[0];
    },

    // Créer un nouvel utilisateur
    async create(data) {
        const { name, email, password } = data; // la destructuration
        const [result] = await db.query(
            `INSERT INTO users (name, email, password)
            VALUES (?, ?, ?)`,
            [name, email, password]
        );
        return {id: result.insertId, name, email };
    },

    // Mettre à jour les informations d'un utilisateur
    async update(id, data) {
        const { name, email } = data;
        const [result] = await db.query(
            `UPDATE users
            SET name = ?, email = ?
            WHERE id = ?`,
            [name, email, id]
        );
        return result.affectedRows > 0;
    },

    // Supprimer un utilisateur
    async delete(id) {
        const [result] = await db.query(
            `DELETE FROM users
            WHERE id = ?`,
            [id]
        );
        return result.affectedRows > 0;
    }
};

// exportation du modèle
module.exports = UserModel;
