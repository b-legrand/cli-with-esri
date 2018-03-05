import { InjectionToken } from '@angular/core';

/**
 * Constante permettant d'éviter les conflits de nom lors de l'injection.
 */
export let APP_CONFIG = new InjectionToken('app.config');

export interface AppConfig {
  /**
   * Nom de l'application, affiché en titre et dans le header.
   */
  appName: string;
  /**
   * Couleur SNCF de l'application.
   */
  themeColor: string;
  /**
   * Version de l'api arcgis.
   */
  apiVersion: string;
}

export const DEFAULT_APP_CONFIG: AppConfig = {
  appName: 'Maquette widget-container',
  apiVersion: '4.6',

//    themeColor: 'rgb(110, 30, 120)', // violet
//    themeColor: 'rgb(255, 182, 18)', // jaune-safran
    themeColor: 'rgb(0, 136, 206)', // bleu-primaire
//    themeColor: 'rgb(60, 55, 50)', // carbone
//    themeColor: 'rgb(213, 43, 30)', // rouge-assistance
//    themeColor: 'rgb(161, 0, 107)', // prune
//    themeColor: 'rgb(210, 225, 0)', // vert-anis
//    themeColor: 'rgb(255, 255, 255)', // blanc
//    themeColor: 'rgb(205, 0, 55)', // framboise
//    themeColor: 'rgb(130, 190, 0)', // vert-pomme
//    themeColor: 'rgb(224, 82, 6)', // orange
//    themeColor: 'rgb(0, 154, 166)', // bleu-canard
};

