import { Injectable, EventEmitter } from "@angular/core";
import { EsriLoaderService } from "./esri-loader.service";

/**
 * Service de fourniture de la map esri.
 * Permet de mettre en cache la map et de gérer le fait qu'elle soit déja chargée.
 *
 */
@Injectable()
export class EsriMapService {
  public isLoaded = new EventEmitter();

  map: __esri.Map;

  mapView: __esri.MapView;

  constructor(private esriLoader: EsriLoaderService) {}

  /**
   * Charge une carte esri dans un élément du dom.
   * @param mapProperties
   * @param mapViewProperties
   * @param mapEl élément du dom ou esri mets la carte.
   */
  loadMap(
    mapProperties: __esri.MapProperties,
    mapViewProperties: __esri.MapViewProperties,
    mapEl: HTMLElement,
  ): Promise<{ map: __esri.Map; mapView: __esri.MapView }> {
    return this.esriLoader
      .loadModules(["esri/Map", "esri/views/MapView"])
      .then(([Map, MapView]: [__esri.MapConstructor, __esri.MapViewConstructor]) => {
        // create map
        const map = new Map(mapProperties);

        // copie les propriétés pour ne pas toucher à la source.
        const newMapViewProps = Object.assign({}, mapViewProperties);
        if (!newMapViewProps.container) {
          newMapViewProps.container = mapEl as HTMLDivElement;
        }
        if (!newMapViewProps.map) {
          newMapViewProps.map = map;
        }

        // créé la MapView
        const mapView = new MapView(newMapViewProps);

        this.map = map;
        this.mapView = mapView;

        this.isLoaded.emit();

        return {
          map,
          mapView,
        };
      });
  }
  /**
   * Charge une webmap plutôt qu'une map.
   *
   * @param webMapProperties
   * @param mapViewProperties
   * @param mapEl
   */
  loadWebMap(
    webMapProperties: __esri.WebMapProperties,
    mapViewProperties: __esri.MapViewProperties,
    mapEl: HTMLElement,
  ): Promise<{ map: __esri.WebMap; mapView: __esri.MapView }> {
    return this.esriLoader
      .loadModules(["esri/views/MapView", "esri/WebMap"])
      .then(([MapView, WebMap]: [__esri.MapViewConstructor, __esri.WebMapConstructor]) => {
        // créé la webmap
        const map: __esri.WebMap = new WebMap(webMapProperties);

        // créé un nouvel objet props pour éviter d etoucher à la source.
        const newMapViewProps = Object.assign({}, mapViewProperties);
        if (!newMapViewProps.container) {
          newMapViewProps.container = mapEl as HTMLDivElement;
        }
        if (!newMapViewProps.map) {
          newMapViewProps.map = map;
        }

        // créé la MapView
        const mapView = new MapView(newMapViewProps);

        this.map = map;
        this.mapView = mapView;

        this.isLoaded.emit();

        return {
          map,
          mapView,
        };
      });
  }
  /**
   * Ajoute un élément du dom à la mapView en tant que widget.
   */
  addWidget(element: HTMLElement, position: string) {
    this.mapView.ui.add(element, position);
  }
}
