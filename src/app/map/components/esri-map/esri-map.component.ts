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
 * */
@Component({
  selector: 'esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.scss']
})
export class EsriMapComponent implements OnInit {

  private map: __esri.Map;

  private mapView: __esri.MapView;

  public isLoading = true;
  /**
   * Référence vers l'élement conteneur de la map esri.
   */
  @ViewChild('map') public mapEl: ElementRef;

  /**
   * Liste des widgets contenus dans cette map.
   */
  @ContentChild(WidgetWindowComponent) public child: QueryList<WidgetWindowComponent>;

  @Input() public mapProperties: __esri.MapProperties;
  @Input() public webMapProperties: __esri.WebMapProperties;
  @Input() public mapViewProperties: __esri.MapViewProperties = {};
  @Output() public mapViewPropertiesChange = new EventEmitter<__esri.MapViewProperties>()
  @Output() mapInit = new EventEmitter();

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
      this.mapInit.emit({
        map: this.map,
        mapView: this.mapView
      });
      this.mapInit.complete();
      this.isLoading = false;
    });
  }
}
