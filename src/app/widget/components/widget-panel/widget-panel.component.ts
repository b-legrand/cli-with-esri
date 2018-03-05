import {Component, OnInit, EventEmitter, Input, Inject} from '@angular/core';
import {APP_CONFIG, AppConfig} from '../../../core/model/app.config';

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

  public isResizing = false;

  public startPosition?: { x: number, y: number };

  public themeColor: string;

  constructor(@Inject(APP_CONFIG) appConfig: AppConfig) {
    this.themeColor = appConfig.themeColor;
  }

  ngOnInit() {
  }

}
