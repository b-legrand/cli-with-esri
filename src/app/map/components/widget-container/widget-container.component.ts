import {
  AfterContentInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ContentChildren, ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {WidgetComponent} from '../../../widget/components';
import {EsriMapService} from '../../services/esri-map.service';
import {WidgetStateManager} from '../../../widget/services/widget-state-manager.service';

export enum WidgetContainerPosition {
  TOP_RIGHT,
  TOP_LEFT,
  BOTTOM_RIGHT,
  BOTTOM_LEFT,
  GLOBAL,
}

const zoneWidth = 320;

/**
 *
 */
@Component({
  selector: 'widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.scss']
})
export class WidgetContainerComponent implements OnInit, AfterContentInit {

  /**
   * Liste des widgets contenu dans ce conteneur.
   */
  @ContentChildren(WidgetComponent) widgets: QueryList<WidgetComponent>;
  @ContentChildren(WidgetComponent, { descendants: true}) childWidgets: QueryList<WidgetComponent>;

  /**
   * Zone d'ancrage pour ce conteneur. ('left' ou 'right' ou vide)
   */
  @Input() public anchorZone: string;

  /**
   * Conteneur de widget libre.
   */
  @ViewChild('freeView', {read: ViewContainerRef}) freeZoneRef: ViewContainerRef;

  /**
   * Conteneur de widget 'ancrés'.
   */
  @ViewChild('anchorView', {read: ViewContainerRef}) anchorZoneRef: ViewContainerRef;

  @ViewChild('containerBounds', {read: ElementRef}) bounds: ElementRef;

  /**
   * top-left | top-right | bottom-left | bottom-right | manual
   */
  @Input() public position: string;

  public containerStyle: any = {
    left: '62px', // 15px + 32px + 15px (gouttière esri + taille bouton esri + gouttière)
    right: '62px',
    bottom: '15px',
    top: 'calc(2.5em + 15px)',
  };

  private widgetFactory: ComponentFactory<WidgetComponent>;

  constructor(private esriMapService: EsriMapService,
              private widgetStateManager: WidgetStateManager,
              private componentFactoryResolver: ComponentFactoryResolver) {
    this.widgetFactory = this.componentFactoryResolver.resolveComponentFactory(WidgetComponent);
  }

  /**
   * initialize les zone selon le paramètre position.
   */
  ngOnInit() {
  }

  /**
   * Une fois dans cette fonction les widgets enfants sont disponibles
   */
  ngAfterContentInit() {
    this.widgets.forEach(
      widget => {
      // ajout des widgets enfants au service global de gestion d'état
      this.widgetStateManager.addWidgetState(widget.state);
      // todo répartir les widgets selon leur état.
      if (widget.state.anchored) {
        // this.freeZoneRef.detach(this.freeZoneRef.indexOf());
        // this.anchorZoneRef.insert(widget);
      } else {
        // this.freeZoneRef.insert();
      }
      // injecte les contraintes de ce conteneur
    });
    // les widgets ayant un [icon] de définit sont ajouté à la map esri.
    this.widgets
      .filter(widget => widget.icon !== undefined)
      .forEach((widget, i) => {
        widget.position = this.position;
        widget.index = i;
        widget.contentLoaded = true;
      });
  }

  public attachWidgetsToAnchorZone() {

  }
}

export default WidgetContainerComponent;
