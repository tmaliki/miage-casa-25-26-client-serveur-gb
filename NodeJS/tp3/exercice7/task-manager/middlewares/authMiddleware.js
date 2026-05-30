// middlewares/authMiddleware.js
// ─────────────────────────────────────────────────────────────
// Ce middleware protège les routes qui nécessitent d'être
// connecté. Il s'exécute AVANT le contrôleur ciblé.
//
// Fonctionnement :
//   1. Lire le header Authorization: Bearer <token>
//   2. Extraire le token (supprimer le préfixe "Bearer ")
//   3. Vérifier sa signature avec jwt.verify()
//   4. Si valide → injecter le payload dans req.user → next()
//   5. Si invalide → retourner 401 (non autorisé)
//
// Structure d'un token JWT :
//   header.payload.signature
//   eyJhbGci...  .eyJpZCI6...  .SflKxw...
//   (encodé en Base64, PAS chiffré → ne pas y mettre de secrets)
// ─────────────────────────────────────────────────────────────

// require('dotenv').config();
const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    // Étape 1 : Récupérer le header Authorization
    const authHeader = req.headers['authorization'];
    // Format attendu : "Bearer eyJhbGciOiJIUzI1NiIs..."

    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: 'Accès refusé : aucun token fourni'
        });
    }

    // Étape 2 : Extraire le token (après "Bearer ")
    const parts = authHeader.split(' ');
    // parts[0] = "Bearer"
    // parts[1] = le token

    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(401).json({
            success: false,
            message: 'Format du token invalide. Attendu : Bearer <token>'
        });
    }

    const token = parts[1];

    // Étape 3 : Vérifier et décoder le token
    try {
        // jwt.verify() fait deux choses à la fois :
        //   a) Vérifie que le token n'a pas été modifié (signature)
        //   b) Vérifie que le token n'est pas expiré (exp)
        // Si l'une ou l'autre échoue → exception levée → catch
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Étape 4 : Injecter les données de l'utilisateur dans req
        // Les contrôleurs suivants peuvent accéder à req.user
        req.user = decoded;
        // decoded contient : { id, email, name, iat, exp }
        // iat = issued at (timestamp création)
        // exp = expiration (timestamp expiration)

        next(); // Token valide → passer au contrôleur

    } catch (error) {
        // Distinguer les types d'erreurs JWT pour un meilleur retour
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                message: 'Token expiré : veuillez vous reconnecter'
            });
        }
        
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                success: false,
                message: 'Token invalide'
            });
        }

        // Erreur inattendue
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de la vérification du token'
        });
    }
}

module.exports = authMiddleware;
