import {
  Component,
  OnInit,
  Input,
  ViewChild,
  EventEmitter,
  ElementRef,
  Output,
  ContentChild,
  QueryList
} from '@angular/core';
import { EsriMapService } from '../../services/esri-map.service';
import { WidgetWindowComponent } from '../../../widget/components';

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
  selector: 'esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.scss']
})
export class EsriMapComponent implements OnInit {

  private map: __esri.Map;

  private mapView: __esri.MapView;

  /**
   * Flag de préchargement.
   */
  public isLoading = true;


  /**
   * Référence vers l'élement conteneur de la map esri.
   */
  @ViewChild('map') public mapEl: ElementRef;

  /**
   * Liste des widgets contenus dans cette map.
   */
  @ContentChild(WidgetWindowComponent) public child: QueryList<WidgetWindowComponent>;

  /**
   * Propriétés de la Map esri.
   *
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

  ngOnInit() {
    if (this.map) {
      // map is already initialized
      return;
    }

    this.loadMap();
  }

  loadMap() {
    let mapPromise: Promise<any>;

    // determine if loading a WebMap or creating a custom map
    if (this.mapProperties) {
      mapPromise = this.mapService.loadMap(
        this.mapProperties,
        this.mapViewProperties,
        this.mapEl.nativeElement
      );
    } else {
      console.error('Proper map properties were not provided');
      return;
    }
    /* si besoin faire évoluer avec :
    else if (this.webMapProperties) {
      mapPromise = this.mapService.loadWebMap(
        this.webMapProperties,
        this.mapViewProperties,
        this.mapEl
      );
    }
    */

    mapPromise.then(mapInfo => {
      this.map = mapInfo.map;
      this.mapView = mapInfo.mapView;

      // emit event informing application that the map has been loaded
      this.mapLoaded.emit({
        map: this.map,
        mapView: this.mapView
      });
      this.mapLoaded.complete();
      this.isLoading = false;
    });
  }

  attachEvents(mapView: __esri.MapView, watchUtils: __esri.watchUtils) {
    mapView.on('zoom', event => {
      console.log('zoom', event);
    });
    mapView.on('move', event => {
      console.log('move', event);
    });
    watchUtils.watch(mapView, 'stationary', (value: boolean) => {
      console.log('stationary', value);
      if (value) {// est passé de faux (en mouvement) à vrai (immobile)
        this.mapViewPropertiesChange.emit({
          center: [mapView.center.x, mapView.center.y],
          zoom: mapView.zoom,
        });
      }
    });
  }

}
