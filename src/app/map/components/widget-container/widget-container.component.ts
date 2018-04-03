import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { WidgetWindowComponent } from "../../../widget/components";
import { EsriMapService } from "../../services/esri-map.service";
import { WidgetStateManager } from "../../../widget/services/widget-state-manager.service";
import { WidgetStackService } from "../../services/widget-stack.service";

export enum WidgetContainerPosition {
  TOP_RIGHT,
  TOP_LEFT,
  BOTTOM_RIGHT,
  BOTTOM_LEFT,
  GLOBAL,
}

const zoneWidth = 320;

/**
 * Le widget container est chargé de :
 * Recevoir en enfant les widgets déclarés par les applications :
 *
 * @example
 * <widget-container>
 *             <widget-x></widget-x>
 *             <widget-y></widget-y>
 * </widget-container>
 *
 */
@Component({
  selector: "widget-container",
  templateUrl: "./widget-container.component.html",
  styleUrls: ["./widget-container.component.scss"],
  providers: [WidgetStackService], // permets au service d'être injecté uniquement pour ce conteneur et sa zone d'ancrage
})
export class WidgetContainerComponent implements OnInit, AfterContentInit {
  /**
   * Liste des widgets contenu dans ce conteneur.
   */
  @ContentChildren(WidgetWindowComponent)
  widgets: QueryList<WidgetWindowComponent>;

  /**
   * Liste des widgets enfants. ( de 2nd niveau & plus )
   */
  @ContentChildren(WidgetWindowComponent, { descendants: true })
  childWidgets: QueryList<WidgetWindowComponent>;

  /**
   * Zone d'ancrage pour ce conteneur. ('left' ou 'right' ou vide)
   */
  @Input() public anchorZone: string;

  /**
   * Conteneur de widget libre.
   */
  @ViewChild("freeView", { read: ViewContainerRef })
  freeZoneRef: ViewContainerRef;

  /**
   * Conteneur de widget 'ancrés'.
   */
  @ViewChild("anchorView", { read: ViewContainerRef })
  anchorZoneRef: ViewContainerRef;

  /**
   * Référence vers le cadre pour limiter le drag & drop
   */
  @ViewChild("containerBounds", { read: ElementRef })
  bounds: ElementRef;

  /**
   * top-left | top-right | bottom-left | bottom-right | manual
   */
  @Input() public position: string;

  public containerStyle: any = {
    left: "62px", // 15px + 32px + 15px (gouttière esri + taille bouton esri + gouttière)
    right: "62px",
    bottom: "15px",
    top: "calc(2.5em + 15px)",
  };

  constructor(
    private esriMapService: EsriMapService,
    private widgetStateManager: WidgetStateManager,
    public stacks: WidgetStackService,
  ) {}

  /**
   * initialize les zone selon le paramètre position.
   */
  ngOnInit() {}

  /**
   * Une fois dans cette fonction les widgets enfants sont disponibles
   */
  ngAfterContentInit() {
    this.widgets.forEach(widget => {
      // ajout des widgets enfants au service global de gestion d'état
      this.widgetStateManager.addWidgetState(widget.key, widget.state);
      // injecte les contraintes de ce conteneur
      widget.boundaries = this.bounds.nativeElement;
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

  public attachWidgetsToAnchorZone() {}
}

export default WidgetContainerComponent;
