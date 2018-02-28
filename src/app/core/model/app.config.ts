
import { InjectionToken } from '@angular/core';

/**
 * Constante permettant d'éviter les conflits de nom lors de l'injection.
 */
export let APP_CONFIG = new InjectionToken('app.config');

export interface IAppConfig {
    appName: string;
    themeColor: string;
    arcgisApiVersion: string;
}

export const appConfig: IAppConfig = {
    appName: 'Maquette xWidget',
    arcgisApiVersion: '4.6',
    themeColor: 'rgb(0, 136, 206)'
};

export default appConfig;
