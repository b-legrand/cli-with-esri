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

  @Input() public state: WidgetState;

  @Input() public config: WidgetConfig;

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

  handleDragStart(event: DragEvent) {
    console.log('Element drag starts', event);
  }

  handleDragEnd(event: DragEvent) {
    console.log('Element drag ended', event);
  }

  handleResizeEnd(event: ResizeEvent): void {
    console.log('Element was resized', event);
    // x move
    this.state.size.width += event.edges.right as number;
    // y move
    this.state.size.height += event.edges.bottom as number;
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
    if(this.state.anchored) {
      return;
    }
    this.state.zIndex = this.stateManager.getMaxZIndex();
    this.state.zIndex++;
  }

}
