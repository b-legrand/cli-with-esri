import { NgModuleRef, ApplicationRef } from '@angular/core';
import { hmrModule } from '@angularclass/hmr';

/**
 * Initialise le module HMR pour faire du rechargement de composant à chaud (sans recharger toute la page)
 *
 * @param module : module node.js injecté par webpack.
 * @param bootstrap : résultat du bootstrapModule d'angular
 */
export const hmrBootstrap = (module: any, bootstrap: () => Promise<NgModuleRef<any>>) => {
  let ngModule: NgModuleRef<any>;
  // api webpack :
  module.hot.accept();
  // une fois l'application angular initialisée.
  bootstrap().then(mod => {
    ngModule = mod;
    // rattache les hooks sur le module.
    hmrModule(mod, module);
  });
  module.hot.dispose(() => {
    // fait dans ngModule.destroy();
  });
};
