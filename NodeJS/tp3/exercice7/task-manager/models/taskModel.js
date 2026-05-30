// connexion à la base de données
const db = require("../config/db");

const TaskModel = {
    // Récupération de toutes les tâches avec le nom de l'auteur
    async findAll() {
        const [rows] = await db.query(
            `SELECT t.id, t.title, t.description, t.status, t.created_at, t.updated_at, u.name AS user_name
            FROM tasks t
            JOIN users u ON t.user_id = u.id
            ORDER BY t.created_at DESC`
        );
        return rows;
    },

    // Récupération des tâches d'un utilisateur spécifique
    async findByUserId(userId) {
        const [rows] = await db.query(
            `SELECT id, title, description, status, created_at, updated_at
            FROM tasks
            WHERE user_id = ?
            ORDER BY created_at DESC`,
            [userId]
        );
        return rows;
    },

    // Récupération d'un tâche par son ID
    async findById(id) {
        const [rows] = await db.query(
            `SELECT t.*, u.name AS user_name
            FROM tasks t
            JOIN users u ON t.user_id = u.id
            WHERE t.id = ?`,
            [id]
        );
        return rows[0];
    },

    // Créer une tâche
    async create(data) {
        const { user_id, title, description, status = "pending" } = data;
        const [result] = await db.query(
            `INSERT INTO tasks (user_id, title, description, status)
            VALUES (?, ?, ?, ?)`,
            [user_id, title, description, status]
        );
        return { id: result.insertId, user_id, title, description, status };
    },

    // Mettre à jour une tâche
    async update(id, data) {
        const { title, description, status } = data;
        const [result] = await db.query(
            `UPDATE tasks
            SET title = ?, description = ?, status = ?
            WHERE id = ?`,
            [title, description, status, id]
        );
        return result.affectedRows > 0;
    },

    // Supprimer une tâche
    async delete(id) {
        const [result] = await db.query(
            `DELETE FROM tasks
            WHERE id = ?`,
            [id]
        );
        return result.affectedRows > 0;
    }
};

// exportation du modèle
module.exports = TaskModel;
