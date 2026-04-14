// Déclaration de la classe Bibliotheque
class Bibliotheque {
    // contructeur de la classe
    constructor(nom, adresse) {
        this.nom = nom;
        this.adresse = adresse;
        this.listeAuteurs = [];
        this.listeLivres = [];
        this.listeAbonnes = [];
        this.listeEmprunts = [];
    }

    /****************************************
     * Gestion des auteurs
     ****************************************/
    ajouterAuteur(auteur) {
        this.listeAuteurs.push(auteur);
        console.log(`Auteur : ${auteur.prenom} ${auteur.nom} (${auteur.matricule}) ajouté avec succès.`);
    }

    modifierAuteur(auteur) {
        const index = this.listeAuteurs.findIndex((elt, i) => elt.matricule === auteur.matricule)
        if(index !== -1) {
            this.listeAuteurs[index] = auteur;
            console.log(`Auteur : ${auteur.prenom} ${auteur.nom} (${auteur.matricule}) modifié avec succès.`);
        } else {
            console.error(`Auteur non trouvé`)
        }
    }

    afficherListeAuteurs() {
        console.log(`***** Liste de tous les auteurs de la bibliothèque ${this.nom} *****`);
        console.table(this.listeAuteurs);
        console.log(`********************************************************************\n`);
    }

    afficherLivresParAuteur(auteur) {
        const index = this.listeAuteurs.indexOf(auteur)
        if(index !== -1) {
            const auteurLivres = this.listeLivres.filter((elt, i) => elt.auteurs.includes(auteur.matricule));

            console.log(`***** Livres écrits par ${auteur.nom} ${auteur.prenom} (${auteur.matricule}) *****`);
            if (auteurLivres.length > 0) {
                console.table(auteurLivres);
            } else {
                console.log(`Aucun livre trouvé pour cet auteur`);
            }
            console.log(`********************************************************************\n`);
        } else {
            console.error(`Auteur non trouvé`);
        }
    }

    /****************************************
     * Gestion des livres
     ****************************************/
    ajouterLivre(livre) {
        this.listeLivres.push(livre);
        console.log(`Livre : ${livre.titre} (${livre.isbn}) ajouté avec succès.`);
    }

    modifierLivre(livre) {
        const index = this.listeLivres.findIndex((elt, i) => elt.isbn === livre.isbn)
        if(index !== -1) {
            this.listeLivres[index] = livre;
            console.log(`Livre : ${livre.titre} (${livre.isbn}) modifié avec succès.`);
        } else {
            console.error(`Livre non trouvé`)
        }
    }

    supprimerLivre(isbn) {
        const livre = this.listeLivres.find((elt, i) => elt.isbn === isbn);
        if (livre) {
            const nouvelleListe = this.listeLivres.filter((elt, i) => elt.isbn !== isbn);
            this.listeLivres = nouvelleListe;
            console.log(`Livre : ${livre.titre} (${livre.isbn}) supprimé avec succès.`);
        } else {
            console.error(`Livre non trouvé`)
        }
    }

    rechercherLivre(titre) {
        const searchResult = this.listeLivres.filter((l) => l.titre.includes(titre));
        console.log(`\n*************** Resultat de recherche des livres "${titre}" *****************`);
        if (searchResult.length) {
            console.table(searchResult);
        } else {
            console.error(`Aucun livre trouvé !`);
        }
        console.log("******************************************************************************\n");
    }

    afficherListeLivres() {
        console.log(`***** Liste des livres de la Bibliothèque ${this.nom} *****`);
        console.table(this.listeLivres);
        console.log("***********************************************************\n");
    }

    /****************************************************
     * Gestion des abonnés
     ****************************************************/
    ajouterAbonne(abonne) {
        this.listeAbonnes.push(abonne);
        console.log(`Abonné : ${abonne.prenom} ${abonne.nom} (${abonne.matricule}) ajouté avec succès.`);
    }

    modifierAbonne(abonne) {
        const index = this.listeAbonnes.findIndex((a) => a.isbn === abonne.isbn);
        if (index !== -1) {
            this.listeAbonnes[index] = abonne;
            console.log(`Abonné : ${abonne.prenom} ${abonne.nom} (${abonne.matricule}) modifié avec succès.`);
        } else {
            console.error(`Abonné non trouvé.`);
        }
    }

    supprimerAbonne(matricule) {
        const abonne = this.listeAbonnes.find((a) => a.matricule === matricule);
        if (abonne) {
            this.listeAbonnes = this.listeAbonnes.filter((a) => a.matricule !== matricule);
            console.log(`Abonné : ${abonne.prenom} ${abonne.nom} (${abonne.matricule}) supprimé avec succès.`);
        } else {
            console.error(`Abonné non trouvé.`);
        }
    }

    afficherListeAbonnes() {
        console.log(`***** Liste des abonnés de la Bibliothèque ${this.nom} *****`);
        console.table(this.listeAbonnes);
        console.log("************************************************************\n");
    }
}

export default Bibliotheque;