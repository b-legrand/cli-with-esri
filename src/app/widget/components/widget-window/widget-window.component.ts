import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from "@angular/core";
import { ResizeEvent } from "angular-resizable-element";
import { v4 } from "uuid";

import { initialWidgetState, WidgetState } from "../../models/widget-state";
import { WidgetConfig } from "../../models/widget-config";
import { WidgetStateManager } from "../../services/widget-state-manager.service";
import { TemplatePortal } from "@angular/cdk/portal";
import { Store, select } from "@ngrx/store";
import { WidgetActionTypes, WidgetInit } from "../../actions/widget.actions";
import { AppState } from "../../../core/models/app.state";

/**
 * Un composant fenètre de widget est composé de :
 *
 * - `expand-button` Bouton d'activation ajouté à la map esri, avec une position et un index.
 * - `widget-header` Un conteneur dépliable / affichable / ancrable suite au clic sur le bouton.
 * - `widget-panel` le contenu du widget.
 *
 * Il est chargé de :
 * - gérér et remonter les évenements drag / drop liés à son état.
 * - afficher le contenu selon son état.
 */
@Component({
  selector: "widget-window",
  templateUrl: "./widget-window.component.html",
  styleUrls: ["./widget-window.component.scss"],
})
export class WidgetWindowComponent implements OnInit, OnChanges {
  /**
   * Id technique.
   */
  @Input() public key: string;

  /**
   * Etat
   */
  @Input() public state: WidgetState;

  /**
   * Configuration
   */
  @Input() public config: WidgetConfig;

  /**
   * Titre de la fenètre.
   */
  @Input() public title: string;

  /**
   * Si le widget a une icone de lancement attaché.
   *
   * Doit contenir une classe d'icone css (`esri-icon-*` ou `fa fa-*`)
   */
  @Input() public icon: string;

  /**
   * Si le widget a une icone de lancement attaché.
   */
  @Input() public iconLabel: string;

  /**
   * Position 'esri'
   */
  @Input() public position: string;

  /**
   * Index du bouton lanceur au sein d'une zone ui 'esri'.
   */
  @Input() public index: number;

  /**
   * Profondeur CSS.
   */
  @Input() public zIndex: number;

  /**
   * Limites pour le drag and drop, injectées par le widget-container.
   */
  @Input() public boundaries: HTMLElement;

  /**
   * flag pour ne pas appliquer la directive esriWidget d'ajout à la map
   * tant que la map esri n'est pas la.
   */
  public contentLoaded = false;

  /**
   * Poignée
   */
  @ViewChild("widgetHandle") public widgetHandle: ElementRef;

  /**
   * Conteneur
   */
  @ViewChild("widget") public widget: ElementRef;

  /**
   * Portail (template virtuel)
   *
   */
  @ViewChild("widget") public widgetPortal: TemplatePortal<WidgetWindowComponent>;

  constructor(private stateManager: WidgetStateManager, private store: Store<AppState>) {}

  ngOnInit() {
    // todo injecter la config depuis le parent;
    if (!this.config) {
      this.config = {
        uuid: v4(),
        name: this.key,
        movable: true,
        resizable: true,
        anchorable: true,
        closable: true,
        foldable: true,
        scrollable: true,
      };
    }
    this.store
      .pipe(select("widgets"), select(widgets => (widgets ? widgets[this.key] : undefined)))
      .subscribe(widgetState => {
        if (!widgetState && !!this.key) {
          this.state = initialWidgetState();
          this.store.dispatch(
            new WidgetInit({
              key: this.key,
              state: this.state,
            }),
          );
        } else {
          this.state = widgetState;
        }
      });
  }

  ngOnChanges(changes) {
    if (changes.position && changes.position.currentValue) {
      this.contentLoaded = true;
    }
    if (changes.key && !changes.key.currentValue) {
      this.key = v4();
    }
  }

  handleDragStart(event: DragEvent) {}

  handleDragEnd(event: DragEvent) {
    if (this.config.movable && !this.state.anchored) {
      // angular2-draggable fonctionne avec des translation css, ca fout le bazar selon le conteneur.
      const { transform } = this.widget.nativeElement.style;
      const offset = this.parseTransform(transform);
      this.widget.nativeElement.style.left = this.state.position.left += offset.x;
      this.widget.nativeElement.style.top = this.state.position.top += offset.y;
      delete this.widget.nativeElement.style.transform;
    }
  }

  handleResizeEnd(event: ResizeEvent): void {
    if (this.config.resizable) {
      // x move
      this.state.size.width += event.edges.right as number;
      // y move
      this.state.size.height += event.edges.bottom as number;
      // force la taille
      this.widget.nativeElement.style.width = this.state.size.width;
      this.widget.nativeElement.style.height = this.state.size.height;
    }
  }

  /**
   * Gère la remontée du changement d'état depuis la barre de titre.
   * @param event
   */
  handleStateChange(event: WidgetState) {
    this.state = event;
  }

  /**
   * Remontée de l'activation depuis le bouton extends.
   */
  handleActiveChange(event: boolean) {
    this.state.closed = !event;
  }

  /**
   * au survol ou au click, pousse le z-index par dessus les autres.
   */
  incrementZIndex() {
    if (this.state.anchored) {
      return;
    }
    this.state.zIndex = this.stateManager.getMaxZIndex();
    this.state.zIndex++;
  }

  public parseTransform(transformString): { x: number; y: number } {
    const formatExp = /translate\((.*)px, (.*)px\)/;
    const extract = formatExp.exec(transformString);
    return extract && extract.length
      ? {
          x: parseInt(extract[1], 10),
          y: parseInt(extract[2], 10),
        }
      : {
          x: 0,
          y: 0,
        };
  }
}
