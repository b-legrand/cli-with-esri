import { Injectable, ElementRef } from '@angular/core';
import * as esriLoader from 'esri-loader';

/**
 * Encapsule esri-loader dans un service angular.
 *
 * Permets de charger les ressources de l'api esri en lazy loading
 * puis de fournir des modules dojo selon les besoin ensuite.
 *
 * Est connecté à la config de l'appli appelante.
 * // todo rendre le n° de version configurable
 */
@Injectable()
export class EsriLoaderService {
  // options du loader
  private options: esriLoader.ILoadScriptOptions;

  constructor() {
    // app config a injecter pour la version
    this.options = {
      // version de l'api arcgis.
      url: 'https://js.arcgis.com/4.3/',
    };
  }

  isLoaded() {
    return esriLoader.isLoaded();
  }

  /**
   * Charge une map esri en asynchrone.
   *
   * @param options
   */
  loadWebMap(
    mapProps: __esri.MapProperties,
    viewProps: __esri.MapViewProperties,
    mapElement: ElementRef
  ): Promise<Function> {
    //
    return new Promise((resolve: Function, reject: Function) => {
      // don't try to load a second time
      // first, we use Dojo's loader to require the map class
      return esriLoader
        .loadModules(['esri/views/MapView', 'esri/WebMap'])
        .then(
          ([MapView, WebMap]: [
            __esri.MapViewConstructor,
            __esri.WebMapConstructor
          ]) => {
            // then we load a web map from an id
            var webmap = new WebMap({
              portalItem: {
                // autocasts as new PortalItem()
                id: 'f2e9b762544945f390ca4ac3671cfa72'
              }
            });
            // and we show that map in a container w/ id #viewDiv
            var view = new MapView({
              map: webmap,
              container: mapElement.nativeElement
            });
          }
        )
        .catch(err => {
          // handle any errors
          reject(err);
        });
    });
  }

  /**
   * Wrapper autour de la fonction principale de esri-loader
   */
  loadModules(modules: string[]) {
    return esriLoader.loadModules(modules, this.options);
  }
}

export default EsriLoaderService;
