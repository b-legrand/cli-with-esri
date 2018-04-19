/**
 * Permets aux composants de se faire charger une instance de map.
 */
export interface MapAware {
  onMapLoaded(map: __esri.Map, mapView: __esri.MapView);
}
