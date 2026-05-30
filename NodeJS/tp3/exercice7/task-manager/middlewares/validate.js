// middlewares/validate.js
// ─────────────────────────────────────────────────────────────
// Un middleware est une fonction qui s'exécute AVANT le
// contrôleur. Si la validation échoue, on stoppe la requête
// ici et on renvoie une erreur 400 (Bad Request).
// Signature : (req, res, next) → next() passe au suivant
// ─────────────────────────────────────────────────────────────

const validator = require('validator');

const validate = {
    // Validation pour la connexion (login)
    login(req, res, next) {
        const { email, password } = req.body;
        const errors = [];

        if (!email || email.trim() === '') {
            errors.push('Le champ "email" est obligatoire');
        } else if (!validator.isEmail(email)) {
            errors.push('Le format de l\'email est invalide');
        }

        if (!password || password.trim() === '') {
            errors.push('Le champ "password" est obligatoire');
        }

        if (errors.length > 0) {
            return res.status(400).json({ success: false, errors });
        }

        next();
    },

    // Validation pour créer/modifier un utilisateur
    user(req, res, next) {
        const { name, email, phone, password } = req.body;
        const errors = [];

        // Pour POST (création), tous les champs sont requis
        if (req.method === 'POST') {
            if (!name || name.trim() === '') {
                errors.push('Le champ "name" est obligatoire');
            }
            if (!password || password.length < 6) {
                errors.push('Le mot de passe doit contenir au moins 6 caractères');
            }
        }

        // Pour PUT (modification), au moins name ou email requis
        if (req.method === 'PUT') {
            if (!name && !email) {
                errors.push('Au moins "name" ou "email" est requis');
            }
        }

        // Validation de l'email (toujours)
        if (!email || email.trim() === '') {
            errors.push('Le champ "email" est obligatoire');
        } else if (!validator.isEmail(email)) {
            errors.push('Le format de l\'email est invalide');
        }

        if (errors.length > 0) {
            return res.status(400).json({ success: false, errors });
        }

        next(); // Tout est OK → passer au contrôleur
    },

    // Validation pour créer/modifier une tâche
    task(req, res, next) {
        const { title, user_id, status } = req.body;
        const errors = [];
        const validStatuses = ['pending', 'in_progress', 'done'];

        if (req.method === 'POST') {
            if (!title || title.trim() === '') {
                errors.push('Le champ "title" est obligatoire');
            }
            if (!user_id || isNaN(user_id)) {
                errors.push('Le champ "user_id" doit être un nombre valide');
            }
        }

        if (req.method === 'PUT') {
            if (!title || title.trim() === '') {
                errors.push('Le champ "title" est obligatoire');
            }
            if (!status || !validStatuses.includes(status)) {
                errors.push(`Le statut doit être l'un de : ${validStatuses.join(', ')}`);
            }
        }

        if (errors.length > 0) {
            return res.status(400).json({ success: false, errors });
        }

        next();
    }
};

module.exports = validate;
