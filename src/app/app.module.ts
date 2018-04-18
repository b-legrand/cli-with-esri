import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ApplicationRef, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { removeNgStyles, createNewHosts, createInputTransfer } from "@angularclass/hmr";

import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { LibraryModule } from "./library/library.module";
import { MapModule } from "./map/map.module";
import { WidgetModule } from "./widget/widget.module";
import { LayoutModule } from "./layout/layout.module";
import { TocModule } from "./toc/toc.module";

import { APP_CONFIG, DEFAULT_APP_CONFIG } from "./core/model/app.config";
import { APP_ROUTES } from "./routes";
import "rxjs/add/operator/take";

import { Action, Store, StoreModule, ActionReducerMap } from "@ngrx/store";
import { AppState, getInitialState } from "./core/model/app.state";
import { metaReducers } from "./core/reducers/meta.reducers";
import { AppActionTypes } from "./core/actions/core.actions";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";

/** Juste pour typer ce que nous donne `angular-class/hmr` */
export interface StoreType {
  state: AppState;
  restoreInputValues: () => void;
  disposeOldHosts: () => void;
}

export const reducers: ActionReducerMap<any> = {};
/**
 * Module principal d'une application soclejs.
 *
 */
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
    StoreModule.forRoot(reducers, {
      metaReducers,
      initialState: getInitialState,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    // modules common-socle
    MapModule,
    WidgetModule,
    LayoutModule,
    CoreModule,
    LibraryModule,
    TocModule,
  ],
  providers: [{ provide: APP_CONFIG, useValue: DEFAULT_APP_CONFIG }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(public appRef: ApplicationRef, private appStore: Store<any>) {}

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
    console.log("[HMR] onInit : store", store);
    console.log("store.state.data:", store.state.data);

    // restore l'état auprès de ngrx en envoyant une action RefreshState.
    if (store.state) {
      this.appStore.dispatch({
        type: AppActionTypes.RefreshState,
        payload: store.state,
      } as Action);
    }
    if ("restoreInputValues" in store) {
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
  public hmrOnDestroy(store) {
    console.log("[HMR] onDestroy : store", store);

    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // inject your AppStore and grab state then set it on store
    this.appStore.take(1).subscribe(appState => {
      console.log("[HMR] storing state", appState);
      store.state = Object.assign({}, appState);
    });

    // save input values
    store.restoreInputValues = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  /**
   * Restaure les composants.
   * @param store
   */
  public hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
    // anything you need done the component is removed
  }
}
