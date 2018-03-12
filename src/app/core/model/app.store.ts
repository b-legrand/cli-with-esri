import { AppState, initialState } from './app.state';
import { InjectionToken } from '@angular/core';
import { Store, createStore, Action, compose, StoreEnhancer } from 'redux';

// active l'extension redux-devtools si elle est présente
const devtools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
  window['devToolsExtension']() : f => f;

export function createAppStore(): Store<AppState> {
    return createStore<AppState>(
        // todo mettre en place des reducers
        (state: AppState = initialState(), action: Action): AppState => state,
        compose(devtools)
    );
}
// point d'entrée pour injection
export const AppStore = new InjectionToken('app.store');

// fournit un store redux en tant que provider angular.
export const appStoreProviders = [
    { provide: AppStore, useFactory: createAppStore }
];
