import {Injectable, Inject} from '@angular/core';
import * as esriLoader from 'esri-loader';
import {APP_CONFIG, AppConfig} from '../../core/model/app.config';
import {environment} from '../../../environments/environment';

/**
 * Encapsule esri-loader dans un service angular.
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
      dojoConfig: {
        async: true,
        debug: !environment.production, // attention, manière angular-cli, à adapter.
      }
    };
  }

  isLoaded() {
    return esriLoader.isLoaded();
  }


  /**
   * Wrapper autour de la fonction principale de esri-loader
   */
  loadModules(modules: string[]) {
    return esriLoader.loadModules(modules, this.options);
  }
}

export default EsriLoaderService;
