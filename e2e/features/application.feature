# language: fr


Fonctionnalité: Application::Socle

    Configuration d'une application socle.

    Scénario: Configuration de l'api arcgis

        Soit une application du socle nommée "Application"
        Et une configuration de l'api arcgis en "4.6"
        Quand j'accède à la page "carte"
        Et j'attends 10 secondes
        Alors la carte s'affiche
        Et l'api arcgis a été chargée en version "4.6"

    Scénario: Configuration de la couleur principale
    
        Soit une application du socle nommée "Application"
        Et une configuration de l'api arcgis en "4.6"
        Et une couleur de thème à "#000000"
        Quand j'accède à l'adresse "/space/1"
        Alors la page "Espace 1" s'affiche
        Et le titre de la page est "Espace 1"
        Et la couleur du titre est "#000000"

    Scénario: Configuration de la carte esri
    
        Soit une application du socle nommée "Application"
        Et une configuration de la carte "4.6"
        Quand j'accède à l'adresse "/space/1"
        Alors la page "Espace 1" s'affiche
        Et le titre de la page est "Espace 1"
        Et la couleur du titre est "#000000"
