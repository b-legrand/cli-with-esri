import { Injectable, Inject } from "@angular/core";
import * as esriLoader from "esri-loader";
import { APP_CONFIG, AppConfig } from "../../core/models/app.config";
import { environment } from "../../../environments/environment";

import "rxjs/Observable";
import "rxjs/add/observable/fromPromise";

/**
 * Encapsule esri-loader dans un service angular.
 *
 * @see https://github.com/Esri/esri-loader
 *
 * Permets de charger les ressources de l'api esri en lazy loading
 * puis de fournir des modules dojo selon les besoin ensuite.
 *
 * Est connecté à la config de l'appli appelante.
 */
@Injectable()
export class EsriLoaderService {
  // options du loader
  private options: esriLoader.ILoadScriptOptions;

  constructor(@Inject(APP_CONFIG) appConfig: AppConfig) {
    this.options = {
      // version de l'api arcgis.
      url: `https://js.arcgis.com/${appConfig.apiVersion}/`,
      css: `https://js.arcgis.com/${appConfig.apiVersion}/esri/css/main.css`,
      dojoConfig: {
        async: true,
        debug: !environment.production, // attention, manière angular-cli, à adapter.
        has: {
          "esri-featurelayer-webgl": 1,
        },
      },
    };
  }

  isLoaded() {
    return esriLoader.isLoaded();
  }

  /**
   * Chargement des modules de l'api arcgis.
   * Usage: loaderService.loadModules('esri/Map','esri/MapView').then([Map, MapView] =>  (['esri/Map']:[__esri.MapConstructor]) => {  });
   */
  loadModules(modules: string[]): Promise<any[]> {
    return esriLoader.loadModules(modules, this.options);
  }

  /**
   * Wrapper autour de la fonction principale de esri-loader.
   *
   * Charge l'api arcgis uniquement.
   * Renvoie la balise <script> principale générée par esri-loader.
   */
  loadScript(): Promise<HTMLScriptElement> {
    return esriLoader.loadScript(this.options);
  }
}

export default EsriLoaderService;
