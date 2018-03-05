# Maquette Angular cli

Ce projet est un prototype / proof of concept, à la base pour tester et démontrer angular-cli avec l'api esri.
Il a dérivé suite à la mise en place de l'ergonomie commune au widgets socle (barre de titre, boutons fermer, activation et zone d'ancrage).
Fonctionnalités principales :

* Composant Widget 'IHM' générique avec: 
  * Barre de titre et boutons réduire/ancrer/fermer liés à l'état du widget.
  * Paneau de contenu redimensionnable
  * Gestion du redimensionnement 

Il contient également les fonctionnalités suivantes :

* Basé sur [angular-cli](http://https://github.com/angular/angular-cli/wiki).
* Chargement de l'api esri avec [esri-loader](https://github.com/Esri/esri-loader)
* Composant esri-map avec transclusion.
  * Ce qui veut dire qu'on peut faire des <code><esri-map><widget></widget><widget></widget></esri-map></code>
* Composant widget-container pour définir la position.
* Menu SNCF personnalisable (inspiré par celui du kit-condor) 
* Utilisation du Routeur angular, les routes s'affichent dans des sidebar.
* Directive esriWidget pour mettre un composant en tant que widget custom de la map esri.
* Packaging en tant que librairie avec [ng-packagr](https://github.com/dherges/ng-packagr)

## Installation

## Usage

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Rechargement à chaud.

Exécuter `ng serve --hmr` ou `npm run start` pour avoir un serveur avec rechargement à chaud.

### Code scaffolding

Exécuter `ng generate component core/components/my-custom-comp --module=core` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Exécuter `ng build` pour compiler le projet. Les artefacts sont déposés dans le répertoire `dist/`. Utiliser le paramètre `-prod` pour spécifer l'environnement de destination.

IMPORTANT: angular-cli fonctionne avec des fichiers `\src\environments\environment.ts`, ca peut être intéressant pour avoir des commentair sur la conf.

// todo fichiers à mettre en place
* [ ] environment.gitlab.ts : déploiement sur gitlab  
* [ ] environment.dev.ts : déploiement sur frrfpar-app
* [ ] environment.rec.ts : déploiement sur frrfpar-app

#### Compilation AOT.

#### Packaging librairie

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Les tests unitaires peuvent être lancés avec [jest](https://facebook.github.io/jest/)

Options : https://facebook.github.io/jest/docs/en/cli.html

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

Les tests d'intégration e2e se basent sur protractor et cucumber

Cela permets d'écrire les tests en langage naturel.
