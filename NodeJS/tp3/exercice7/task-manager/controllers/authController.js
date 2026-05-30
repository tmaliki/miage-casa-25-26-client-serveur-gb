const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require("../models/userModel");

const AuthController = {
    // Connexion -> POST : /api/auth/login
    async login(req, res) {
        try {
            const { email, password } = req.body;

            // Etape 1 : L'utilisateur existe-t-il ?
            const user = await UserModel.findByEmail(email);
            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: "Email ou mot de passe incorrect"
                });
            }

            // Etape 2 : Le mot de passe est-il correct ?
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({
                    success: false,
                    message: "Email ou mot de passe incorrect"
                });
            }

            // Etape 3 : Générer le token JWT
            const payload = {
                id: user.id,
                email: user.email,
                name: user.name
                // Ne PAS inclure le mot de passe ou des données sensibles
            }

            const token = jwt.sign(
                payload,
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRES_IN || "24h" }
            )

            // Etape 4 : Retourner le token
            res.status(200).json({
                success: true,
                message: "Connexion réussie",
                token,
                expiresIn: process.env.JWT_EXPIRES_IN || "24h",
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name
                }
            });
        } catch (error) {
            console.error("login error :", error);
            res.status(500).json({
                success: false,
                message: "Erreur serveur"
            })
        }
    }
};

module.exports = AuthController;
