import Bibliotheque from "./Bibliotheque.js";
import { Personne } from "./Personne.js";
import { Auteur } from "./Auteur.js";
import { Abonne } from "./Abonne.js";
import { Livre } from "./Livre.js";

/**
 * Phase de test et exemple d'utilisation
 */

// création d'une instance de la classe Personne
const p1 = new Personne("P-00001", "TCHEROU", "Maliki", "1992-01-26");
p1.afficherInfo();

// créons un objet de la classe Bibliotheque
const b1 = new Bibliotheque("Bibliothèque nationale", "Al Saoud");
// const maBibliotheque = new Bibliotheque("Ma Bibliothèque", "123 Rue de la Paix");

// création des auteurs
const auteur1 = new Auteur("AU-00001", "Hugo", "Victor", "1820-01-24", "Français");
const auteur2 = new Auteur("AU-00002", "Flaubert", "Gustave", "1869-01-24", "Français");
const auteur3 = new Auteur("AU-00003", "Zola", "Émile", "1863-01-24", "Français");
const auteur4 = new Auteur("AU-00004", "Camus", "Albert", "1852-01-24", "Français");
const auteur5 = new Auteur("AU-00005", "Sartre", "Jean-Paul", "1945-01-24", "Français");
const auteur6 = new Auteur("AU-00006", "Molière", "Molière", "1769-01-24", "Français");
const auteur7 = new Auteur("AU-00007", "Shoukri", "Mohamed", "1989-01-24", "Marocain-Algerien");
// console.log(auteur1);
auteur1.afficherInfo();

// ajout des auteurs
b1.ajouterAuteur(auteur1);
b1.ajouterAuteur(auteur2);
b1.ajouterAuteur(auteur7);
b1.ajouterAuteur(auteur3);
b1.ajouterAuteur(auteur5);
b1.ajouterAuteur(auteur6);
b1.ajouterAuteur(auteur4);
console.table(b1.listeAuteurs);

// affichages de la liste des auteurs
// console.table(b1.listeAuteurs);
b1.afficherListeAuteurs();

// modification des informations d'un auteur
const editAuteur1 = new Auteur("AU-00001", "Hugo", "Victor", "1820-01-24", "Français");
b1.modifierAuteur(editAuteur1);
b1.afficherListeAuteurs();

// Ajout des livres
const livre1 = new Livre("LIV-00001", "Les misérables", ["AU-00001"], "1862", 50);
const livre2 = new Livre("LIV-00002", "Notre-Dame de Paris", ["AU-00001"], "1831", 20);
const livre3 = new Livre("LIV-00003", "Le dernier jour d'un condamné", ["AU-00001"], "1829", 100);
b1.ajouterLivre(livre1);
b1.ajouterLivre(livre2);
b1.ajouterLivre(livre3);
b1.afficherListeLivres();

// Modifions la quantité disponible du livre LIV-00001
const editLivre1 = new Livre("LIV-00001", "Les misérables", ["AU-00001"], "1862", 150);
b1.modifierLivre(editLivre1);
b1.afficherListeLivres();

// Recherche d'un livre par son titre
b1.rechercherLivre("Le");

// Affichage des livres d'un auteur
b1.afficherLivresParAuteur(editAuteur1);
b1.afficherLivresParAuteur(auteur2);
