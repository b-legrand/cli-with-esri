# EsriLoaderService

## Rôle

Charger l'api d'esri en `lazy-loading` (chargement la demande), uniquement lorsque l'utilisateur en a besoin.

## Usage

Lorsque vous avez besoin d'utiliser l'api esri il faut distinguer deux cas d'usage :

Le cas ou l'on utilise les objets de l'api, et celui ou on les créé/instancie.

* Typage :

Par exemple pour typer un paramètre de onMapAddedHandler(mapview: MapView);

Il n'est pas nécéssaire de l'importer, il suffit de passer par le namespace `__esri`, fourni par le package `@types/arcgis-js-api`

* Construction

à partir du moment ou vous avec besoin de construire un objet (soit par un new ZoomWidget() par exemple), 
ou bien d'accèder à une instance fournie par l'api arcgis (par exemple watchUtils, ),
Il faut passer par la méthode loadModules() :

```typescript
esriLoader
  // on demande chaque objet par son nom amd (cf) 
  .loadModules('esri/Map','esri/views/MapView')
  // On reçoit en paramètres les ressource de l'api esri, dans l'ordre ou les a demandés.
  // On utilise ici la déstructuration ([Map, MapView]) pour remettre dans des variables le 1er et 2eme arg de la fonction
  .then(([Map, MapView]) => {
     // ici les objets esri sont disponibles et on peut faire
     new Map({});
     new MapView({});
  })
  .catch(this.logger.error)
```

