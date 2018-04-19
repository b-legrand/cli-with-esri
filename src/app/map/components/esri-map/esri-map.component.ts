import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from "@angular/core";
import { EsriMapService } from "../../services/esri-map.service";

/**
 * Composant map simplifié bas/niveau :
 * Honteusement adapté depuis `angular-esri-components`
 *
 * - N'est pas dans un widget parce que la vie est trop courte.
 * - recoit ses properties depuis son parent.
 * -
 *
 * @example
 * <esri-map   [mapProperties]="{basemap: 'gray'}"
 *             [mapViewProperties]="{ zoom: 6,  center: [2.2137, 46.2276]}">
 * </esri-map>
 */
@Component({
  selector: "esri-map",
  templateUrl: "./esri-map.component.html",
  styleUrls: ["./esri-map.component.scss"],
})
export class EsriMapComponent implements OnChanges {
  private map: __esri.Map;

  private mapView: __esri.MapView;

  /**
   * Flag de préchargement.
   */
  public isLoading = true;

  /**
   * Référence vers l'élement conteneur de la map esri.
   */
  @ViewChild("map") public mapEl: ElementRef;

  /**
   * Propriétés de la Map esri.
   * {@link https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#properties-summary}
   * Example :
   * ```json
   * { basemap: "streets" }
   * ```
   *
   */
  @Input() public mapProperties: __esri.MapProperties;

  /**
   * Propriétés d'une WebMap esri.
   * {@link https://developers.arcgis.com/javascript/latest/api-reference/esri-WebMap.html#properties-summary}
   */
  @Input() public webMapProperties: __esri.WebMapProperties;

  /**
   * Propriétés d'une MapView esri.
   * {@link https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#properties-summary}
   */
  @Input() public mapViewProperties: __esri.MapViewProperties = {};

  /**
   * Callback remonté lorsque les propriétés change.
   */
  @Output() public mapViewPropertiesChange = new EventEmitter<__esri.MapViewProperties>();

  /**
   * Callback remonté lorsque la carte est chargée.
   */
  @Output() mapLoaded = new EventEmitter();

  constructor(private mapService: EsriMapService) {}

  ngOnChanges() {
    if (this.map) {
      // map is already initialized
      return;
    }
    if (!this.mapProperties || !this.webMapProperties) {
      this.loadMap();
    }
  }

  loadMap() {
    let mapPromise: Promise<any>;
    // determine if loading a WebMap or creating a custom map
    if (this.mapProperties) {
      mapPromise = this.mapService.loadMap(this.mapProperties, this.mapViewProperties, this.mapEl.nativeElement);
    }

    if (this.webMapProperties) {
      mapPromise = this.mapService.loadWebMap(this.webMapProperties, this.mapViewProperties, this.mapEl.nativeElement);
    }

    mapPromise.then(mapInfo => {
      this.map = mapInfo.map;
      this.mapView = mapInfo.mapView;

      // emit event informing application that the map has been loaded
      this.mapLoaded.emit({
        map: this.map,
        mapView: this.mapView,
      });
      this.mapLoaded.complete();
      this.isLoading = false;
    });
  }

  public attachEvents(mapView: __esri.MapView, watchUtils: __esri.watchUtils) {
    watchUtils.watch(mapView, "stationary", (value: boolean) => {
      if (value) {
        // est passé de faux (en mouvement) à vrai (immobile)
        this.mapViewPropertiesChange.emit({
          center: [mapView.center.x, mapView.center.y],
          zoom: mapView.zoom,
        });
      }
    });
  }
}
