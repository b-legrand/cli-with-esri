# language: fr

Fonctionnalité: Ergonomie::Widgets

    Scénario: Tentative d’authentification avec un compte valide

        Étant donné une application du socle

        Étant donné que je dispose d’un compte utilisateur « ginette »

        Quand j’accède à la page d’accueil

        Et que je saisis mon identifiant « ginette » dans le champ « Login »

        Et que je saisie mon mot de passe « secret » dans le champ « Password »

        Et que je clique sur le bouton « Connexion » du formulaire

        Alors Je suis redirigé sur la carte

        Et je suis redirigé vers la page « Mon compte » à l’URL /mon-compte.html

        Et je prends une capture d'écran