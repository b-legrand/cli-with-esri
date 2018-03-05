import WidgetState from '../../widget/model/widget-state';

/**
 * Objet centralisant l'état de l'application.
 */
export interface AppState {
  widgets?: WidgetState[];
  mapState?: {
    viewProps: __esri.MapViewProperties,
    layers?: any
  };
  // à faire ensuite, les routes
}
