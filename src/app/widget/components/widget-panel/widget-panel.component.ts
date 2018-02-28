import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

/**
 * Ce composant gère le contenu et le redimensionnement d'un wiget socle à travers :
 *
 * Il recoit et dispatche les informations.
 *
 *
 */
@Component({
  selector: 'widget-panel',
  templateUrl: './widget-panel.component.html',
  styleUrls: ['./widget-panel.component.scss']
})
export class WidgetPanelComponent implements OnInit {

  /**
   * Affiche ou non le bouton déplacer.
   */
  @Input() public resizable: boolean;

  @Input() public contentScroll: boolean;

  @Input() public onResizeStart: EventEmitter<any>;

  @Input() public onResizeEndt: EventEmitter<any>;

  constructor() { }

  ngOnInit() {
  }

}
