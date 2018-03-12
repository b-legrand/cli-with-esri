import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { hmrBootstrap } from './hmr';

if (environment.production) {
  enableProdMode();
}
/**
 * Méthode d'init de l'application.
 *
 * @returns {Promise<NgModuleRef<AppModule>>}
 */
const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

// si le hot reload est activé au niveau de l'environnment angular.
if (environment.hmr) {
  // si le hot reload est activé au niveau de webpack.
  if (module[ 'hot' ]) {
    hmrBootstrap(module, bootstrap);
  } else {
    console.error('HMR non actif pour webpack-dev-server!');
    console.log('Lancer npm run start ou ng serve --hmr pour profiter du rechargementt à chaud.');
    bootstrap();
  }
} else {
  bootstrap();
}
