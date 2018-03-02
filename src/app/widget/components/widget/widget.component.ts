import {Component, ElementRef, Input, OnInit, ViewChild, Host, OnChanges} from '@angular/core';
import {initialWidgetState, WidgetState} from '../../model/widget-state';
import {ResizeEvent} from 'angular-resizable-element';
import {WidgetConfig} from '../../model/widget-config';
import WidgetStateManager from '../../services/widget-state-manager.service';

/**
 * Un composant socle widget est au minimum composé de :
 *
 * - Un bouton ajouté à la map esri, avec une position et un index.
 * - une conteneur dépliable / affichable / ancrable suite au clic sur le bouton.
 * - le contenu du widget.
 *
 * Il est chargé de :
 * - gérér et remonter les évenements drag / drop liés à son état.
 * - afficher le contenu selon son état.
 */
@Component({
  selector: 'widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit, OnChanges {

  /**
   * Etat
   */
  @Input() public state: WidgetState;

  /**
   * Configuration
   */
  @Input() public config: WidgetConfig;

  /**
   * Titre.
   */
  @Input() public title: string;

  /**
   * Si le widget a une icone de lancement attaché.
   */
  @Input() public icon: string;

  /**
   * Position 'esri'
   */
  @Input() public position: string;

  /**
   * Index du bouton lanceur au sein d'une zone ui 'esri'.
   */
  @Input() public index: number;

  /**
   * Profondeur
   */
  @Input() public zIndex: number;

  // flag pour ne pas appliquer la directive esriWidget d'ajout a la map tant que la map esri n'est pas la.
  public contentLoaded = false;

  /**
   * Poignée
   */
  @ViewChild('widgetHandle') widgetHandle: ElementRef;

  /**
   * Conteneur
   */
  @ViewChild('widget') widget: ElementRef;

  constructor(private stateManager: WidgetStateManager) {
    this.state = initialWidgetState();
  }

  ngOnInit() {
    // todo injecter l'état depuis unn service de stockage;
    this.state = initialWidgetState();
    this.config = {
      movable: true,
      resizable: true,
      anchorable: true,
      closable: true,
      foldable: true,
    };
  }

  ngOnChanges(changes) {
    console.log(changes);
    if (changes.position && changes.position.currentValue) {
      this.contentLoaded = true;
    }
  }

  handleDragStart(event: DragEvent) { }

  handleDragEnd(event: DragEvent) {
    if (this.config.movable) {
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
  handleActiveChange(event: Boolean) {
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

  public parseTransform(transformString): {x: number, y: number} {
    const formatExp = /translate\((.*)px, (.*)px\)/;
    const extract = formatExp.exec(transformString);
    return {
      x: parseInt(extract[1], 10),
      y: parseInt(extract[2], 10),
    };
  }

}
