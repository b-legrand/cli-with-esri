import { WidgetState } from "../../widget/models/widget-state";

/**
 * Objet centralisant l'état de l'application.
 */
export interface AppState {
  /** Etats des widgets */
  widgets?: {
    [key: string]: WidgetState;
  };
  /** Etat de la carte */
  maps?: {
    [key: string]: {
      /** Propriétés de la vue esri */
      viewProps: __esri.MapViewProperties;
      /**
       * non implémenté, mais ca serait bien d'avoir les couches.
       * surtout pour filtrer par habilitation + garder les couches ouvertes précédemment.
       */
      layers?: any;
    };
  };
  // à faire ensuite, les routes
}

export function getInitialState() {
  return {
    /** les widgets vont enregistrer leur état ici ensuite. */
    widgets: {},
    /** Etat de la carte */
    maps: {
      default: {
        viewProps: {
          zoom: 6,
          center: [2.2137, 46.2276],
        },
      },
    },
  };
}
