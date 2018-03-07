import WidgetState from '../../widget/model/widget-state';
/**
 * Objet centralisant l'état de l'application.
 */
export interface AppState {
  widgets?: {[key:string]:WidgetState};
  mapState?: {
    viewProps: __esri.MapViewProperties,
    layers?: any
  };
  // à faire ensuite, les routes
}

export function initialState() {
  return {
    // les widgets vont s'inscrire ici ensuite.
    widgets: {},
    mapState: {
      viewProps: {
        zoom: 6,
        center: [2.2137, 46.2276]
      }
    }
  };
}
