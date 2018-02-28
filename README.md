# CliWithEsri

Ce projet est un prototype, à la base pour tester angular-cli avec l'api esri.
Il a dérivé suite à la mise en place de l'ergonomie commune au widgets socle (barre de titre, boutons fermeer, activation et zone d'ancrage).
Il contient également les features/fonctionnalités suivantes :

* Basé sur angular-cli.
* Chargement de l'api esri avec [esri-loader](https://github.com/Esri/esri-loader)
* Composant esri-map avec transclusion.
* Composant widget-container pour définir la position.
* Menu SNCF / 
* Utilisation du Routeur angular, la route principal.
* Directive esriWidget pour mettre un composant en tant que widget custom de la map esri.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

