Plan de test : 
INS-01
Inscription avec des données valides
Vérifier si le formulaire d'inscription est fonctionnel en y rentrant toute les informations nécessaire. 

Aller sur le site
Aller sur la page  d'inscription
Remplir le formulaire avec toute les informations
Envoyer le formulaire


### [ID] INS-01

- **Objectif :** Inscription avec des données valides
- **Préparation :** Compte non connecté 
- **Données utilisées :** 
prenom : Paul
nom : Charles
email: paul.charles@gmail.fr
mot de passe : motdepasse
confirmer mot de passe : motdepasse
- **Actions :**
  1. Aller sur la page ToDo List
  2. Aller sur la page inscription
  3. Remplir le formulaire
  4.Soumettre le formulaire
- **Résultat attendu :** Le compte dois ce créer
- **Résultat obtenu :** Le compte a été créer avec succes
- **Statut :** exécuté

Choisissez ensuite l’un des statuts suivants :

- **Réussi** : le résultat obtenu correspond au résultat attendu.


### [ID] INS-02

- **Objectif :** Inscription avec un champ obligatoire vide

- **Préparation :** Compte non connecté 
- **Données utilisées :** 
prenom : 
nom : Charles
email: paul.charles@gmail.fr
mot de passe : mot de passe
confirmer mot de passe : mot de passe
- **Actions :**
  1. Aller sur la page ToDo List
  2. Aller sur la page inscription
  3. Remplir le formulaire sauf un des champs obligatoire
  4.Soumettre le formulaire
- **Résultat attendu :** Un message d'erreur dois s'afficher
- **Résultat obtenu :** Un message d'erreur Veuillez remplir tous les champs du formulaire c'est affiché
- **Statut :** exécuté

Choisissez ensuite l’un des statuts suivants :

- **Réussi** : le résultat obtenu correspond au résultat attendu.


### [ID] INS-03

- **Objectif :** Inscription avec deux mots de passe différents

- **Préparation :** Compte non connecté 
- **Données utilisées :** 
prenom : Paul
nom : Charles
email: paul.charles@gmail.fr
mot de passe : motdepasse
confirmer mot de passe : unautremotdepasse
- **Actions :**
  1. Aller sur la page ToDo List
  2. Aller sur la page inscription
  3. Remplir le formulaire avec le champs confirmer mot de passe différents de mot de passe
  4.Soumettre le formulaire
- **Résultat attendu :** Un message d'erreur dois s'afficher
- **Résultat obtenu :** Un message d'erreur Les 2 mots de passe ne sont pas identiques c'est affiché
- **Statut :** exécuté

Choisissez ensuite l’un des statuts suivants :

- **Réussi** : le résultat obtenu correspond au résultat attendu.


### [ID] TACHE-01

- **Objectif :** Ajout d’une tâche valide avec une catégorie

- **Préparation :** Compte connecté 
- **Données utilisées :** 
Titre de la tâche : Finir l'évaluation
description : Le temps risque de manquer 
date d'échéance : 23/10/2026
Répétition pour la tache : Hebdomadaire
Catégories : Evaluation
Soumettre le formulaire
- **Actions :**
  1. Se connecter
  2. Aller sur la page Ajout une tache
  3. Remplir le formulaire
  4. Soumettre le formulaire
- **Résultat attendu :** La tâche dois être crée
- **Résultat obtenu :** La tache à été créer avec succes Un message La tache : Finir l'évaluation a été ajouté en BDD" est affiché
- **Statut :** exécuté

Choisissez ensuite l’un des statuts suivants :

- **Réussi** : le résultat obtenu correspond au résultat attendu.


### [ID] TACHE-02

- **Objectif :** Ajout avec un champ obligatoire vide

- **Préparation :** Compte connecté 
- **Données utilisées :** 
Titre de la tâche : 
description : Le temps risque de manquer 
date d'échéance : 2026-10-23T16:30
Répétition pour la tache : Hebdomadaire
Catégories : Evaluation
Soumettre le formulaire
- **Actions :**
   1. Se connecter
  2. Aller sur la page Ajout une tache
  3. Remplir le formulaire sauf un champs obligatoire
  4. Soumettre le formulaire
- **Résultat attendu :** Un message d'erreur doit s'afficher 
- **Résultat obtenu :**  Un message Veuillez renseigner ce champ. c'est affiché
- **Statut :** exécuté

Choisissez ensuite l’un des statuts suivants :

- **Réussi** : le résultat obtenu correspond au résultat attendu.


### [ID] TACHE-03

- **Objectif :** Accès à la page sans être connecté

- **Préparation :** Compte non connecté 
- **Données utilisées :** 
adresse de la page de création de tache
Titre de la tâche : Paul
description : Le temps risque de manquer 
date d'échéance : 23/10/2026
Répétition pour la tache : Hebdomadaire
Catégories : Evaluation
Soumettre le formulaire
- **Actions :**
  1. Aller sur la page Mes Taches 
- **Résultat attendu :** L'acces à la page ne dois pas ce faire
- **Résultat obtenu :** Le formulaire ne peux pas se remplir car la page n'arrive pas à acceder au formulaire sans être connecté.
- **Statut :** exécuté

Choisissez ensuite l’un des statuts suivants :

- **Réussi** : le résultat obtenu correspond au résultat attendu.


### [ID] LISTE-01

- **Objectif :** Les tâches actives du compte connecté sont affichées

- **Préparation :** Compte connecté 
- **Données utilisées :** 
adresse de la page Mes taches actives http://localhost:8080/task/activeall

- **Actions :**
  1. Se connecter
  2. Aller sur la page Mes Taches actives
  3. Vérifier si les taches sont présentes
- **Résultat attendu :** Les taches enregistré doivent être présente
- **Résultat obtenu :** Le Test Finir l'évaluation est bien présent dans la page
- **Statut :** non exécuté

Choisissez ensuite l’un des statuts suivants :

- **Réussi** : le résultat obtenu correspond au résultat attendu.


### [ID] LISTE-02

- **Objectif :** Ses tâches terminées ne sont pas affichées

- **Préparation :** Compte connecté 
- **Données utilisées :** 
adresse de la page Mes taches actives http://localhost:8080/task/inactiveall

- **Actions :**
  1. Se connecter
  2. Aller sur la page Mes Taches actives
  3. Vérifier si les taches désactivé sont toujours présente 
- **Résultat attendu :** L'acces à la page ne dois pas ce faire
- **Résultat obtenu :** Une fois la tache désactivé elle ne s'affiche plus dans la page des taches actives
- **Statut :** non exécuté

Choisissez ensuite l’un des statuts suivants :

- **Réussi** : le résultat obtenu correspond au résultat attendu.


### [ID] LISTE-03

- **Objectif :** Les tâches d’un autre compte ne sont pas affichées

- **Préparation :** Compte connecté 
- **Données utilisées :** 
adresse de la page Mes taches actives http://localhost:8080/task/inactiveall

adresse de la page Mes taches inactives http://localhost:8080/task/activeall

- **Actions :**
  1. Se connecter
  2. Aller sur la page Mes Taches incatives
  3. Vérifier si les taches désactivé sont présente sont présentes
  4.Aller sur la page Mes Taches actives
  5. Vérifier si les taches sont présentes
- **Résultat attendu :** L'acces à la page ne dois pas ce faire
- **Résultat obtenu :** [À compléter après le test]
- **Statut :** non exécuté

Choisissez ensuite l’un des statuts suivants :


- **Non exécuté** : le test n’a pas été lancé.


## 3 Expliquer vos priorités

**Quels cas sont les plus importants à vérifier en premier et pourquoi ?**

Les tests les plus importants:
TACHE-03 afin de s'assurer que la page est bien sécurisé, cela permetrai à un utilisateur non connecter d'acceder à la page et essayé de faire des injections sql 
INS-02 Ce test est indispensable pour s'assurer que l'utilisateur une fois inscrit sans avoir rentré d'email soit dirigé automatiquement vers l'acceuil et ne puisse plus se reconecter apres une deconnexion.

[Répondez en quelques lignes en expliquant les conséquences possibles pour l’utilisateur.]