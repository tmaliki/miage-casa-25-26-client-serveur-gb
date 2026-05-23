const express = require('express');
const app = express();
app.use(express.json()); // formattage des données venant du body au format JSON

// JSON : est un format de données structuré sous format de clé-valeur (comme un objet)

let products = [];

// Route racine (url principale)
app.get("/", (req, res) => {
    res.json({ message : "Bienvenue sur l'API de Gestion des produits" });
});

// Route pour lister tous les produits
app.get("/products", (req, res) => {
    res.status(200).json(products);
});

// Route pour créer/ajouter un produit
app.post("/products", (req, res) => {
    /**
    {
        "id": 1,
        "name": "prod1",
        "description": "prod1",
        "price": 10.50
    }
     */
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json({
        message: "Produit ajouté avec succès",
        resultat: newProduct
    });
});

// Route pour modifier un produit par son id
app.put("/products/:id", (req, res) => {
    const productId = req.params.id;
    const { name, description, price } = req.body;

    const index = products.findIndex((p) => p.id === parseInt(productId));
    if (index === -1) {
        res.status(404).json({ error : "Produit non trouvé" });
    } else {
        products[index] = { id: productId, name, description, price };
        res.status(201).json({
            message: "Produit modifié avec succès",
            resultat: products[index]
        });
    }
});

// Route pour afficher les informations d'un produit par id
app.get("/products/:id", (req, res) => {
    const productId = req.params.id;
    const productInfo = products.find((p) => p.id === parseInt(productId));
    if (productInfo) {
        res.status(200).json(productInfo);
    } else {
        res.status(404).json({ error: "Produit non trouvé" });
    }
});

// Route pour supprimer un produit par son id
app.delete("/products/:id", (req, res) => {
    const productId = req.params.id;
    const prod = products.find((p) => p.id === parseInt(productId));
    if (prod) {
        products = products.filter((p) => p.id !== parseInt(productId));
        res.status(200).json({ message: "Produit supprimé avec succès" });
    } else {
        res.status(404).json({ error: "Produit non trouvé" });
    }
});

// Erreur 404 (URL not found)
app.use((req, res) => {
    res.status(404).json({ error: "URL non trouvée" });
});

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Le serveur tourne sur : http://localhost:${PORT}`);
});
