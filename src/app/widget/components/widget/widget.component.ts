import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {initialWidgetState, WidgetState} from '../../model/widget-state';
import {ResizeEvent} from 'angular-resizable-element';
import {WidgetConfig} from '../../model/widget-config';

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
export class WidgetComponent implements OnInit {

  @Input() public state: WidgetState;

  @Input() public config: WidgetConfig;

  @Input() public title: string;

  @Input() public icon: string;

  @ViewChild('widgetHandle') widgetHandle: ElementRef;

  constructor() {
    this.state = initialWidgetState();
  }

  ngOnInit() {
    this.state = initialWidgetState();
    this.config = {
      movable: true,
      resizable: true,
      anchorable: true,
      closable: true,
      foldable: true,
    };
  }

  handleDragStart(event: DragEvent) {
    console.log('Element drag starts', event);
  }

  handleDragEnd(event: DragEvent) {
    console.log('Element drag ended', event);
  }

  handleResizeEnd(event: ResizeEvent): void {
    console.log('Element was resized', event);
    const {width, height} = event.rectangle;
    this.state.size = {width, height};
  }

  handleAnchor(event) {
    // todo rattacher a un conteneur parent différent.
  }

  handleClose(event) {
    // todo
  }

  handleFold(event) {
  }
}
