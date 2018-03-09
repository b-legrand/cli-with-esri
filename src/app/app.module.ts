import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ApplicationRef, NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

import { AppComponent } from './app.component';
import { MapModule } from './map/map.module';
import { WidgetModule } from './widget/widget.module';
import { LayoutModule } from './layout/layout.module';

import { APP_CONFIG, DEFAULT_APP_CONFIG } from './core/model/app.config';
import { routes } from './routes';
import {AppStoreService} from './core/services/app-store.service';
import {CoreModule} from './core/core.module';
// import {LibraryModule} from './library/library.module';
import { AppStore, appStoreProviders, createAppStore } from './core/model/app.store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MapModule,
    WidgetModule,
    LayoutModule,
    CoreModule,
    // LibraryModule,
  ],
  providers: [
    { provide: APP_CONFIG, useValue: DEFAULT_APP_CONFIG },
    { provide: AppStore, useFactory: createAppStore}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, private appStore: AppStoreService) {}

  /**
   * Callback appelé suite à un rechargement à chaud.
   * On restore l'état de l'application.
   *
   * @param store objet de transfert conservé entre les rechargements.
   */
  hmrOnInit(store) {
    if (!store || !store.state) {
      return;
    }
    console.log('[HMR] onInit : store', store);
    console.log('store.state.data:', store.state.data);

    this.appStore.update(store.state);

    if ('restoreInputValues' in store) {
      store.restoreInputValues();
    }
    // change detection
    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  /**
   * Hook avant reload, on sauvegarde l'état.
   * @param store
   */
  hmrOnDestroy(store) {
    console.log('[HMR] onDestroy : store', store);

    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // inject your AppStore and grab state then set it on store
    const appState = this.appStore.getState();
    console.log('[HMR] storing state', appState);
    store.state = Object.assign({}, appState);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  /**
   * Restaure les composants.
   * @param store
   */
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
    // anything you need done the component is removed
  }

  // les autres fonctions (non documentées de l'api)
  hmrOnStatus(status) { }
  hmrOnCheck() { }
  hmrOnDecline() { }
}
