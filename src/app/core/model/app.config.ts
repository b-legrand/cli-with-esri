import { InjectionToken } from "@angular/core";
import { SncfColor } from "../constants/sncf-color.enum";

/**
 * Constante permettant d'éviter les conflits de nom lors de l'injection.
 */
export let APP_CONFIG = new InjectionToken("app.config");

/**
 * Configuration de base d'une application socle.
 */
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

/**
 * Valeur par défaut de la configuration, fournie par le socle si les applications ne la fournisse pas.
 */
export const DEFAULT_APP_CONFIG: AppConfig = {
  appName: "Maquette ergonomie",
  apiVersion: "4.6",
  themeColor: SncfColor.BleuPrimaire as string,
};
