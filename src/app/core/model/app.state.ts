import WidgetState from '../../widget/model/widget-state';

/**
 * Objet centralisant l'état de l'application.
 */
export interface AppState {
  /** Etats des widgets */
  widgets?: {[key: string]: WidgetState};
  /** Etat de la carte */
  mapState?: {
    viewProps: __esri.MapViewProperties,
    layers?: any
  };
  // à faire ensuite, les routes
}

export function initialState() {
  return {
    /** les widgets vont enregistrer leur état ici ensuite. */
    widgets: {},
    /** Etat de la carte */
    mapState: {
      viewProps: {
        zoom: 6,
        center: [2.2137, 46.2276]
      }
    }
  };
}
