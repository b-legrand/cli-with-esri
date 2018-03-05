import {Component, Inject, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {APP_CONFIG, AppConfig} from '../../../core/model/app.config';
import {WidgetState} from '../../model/widget-state';

/**
 * L'expand button est un bouton de style esri permettant d'activer / désactiver le widget qui l'utilise.
 */
@Component({
  selector: 'expand-button',
  templateUrl: './expand-button.component.html',
  styleUrls: ['./expand-button.component.scss']
})
export class ExpandButtonComponent implements OnInit {

  @Input() public name: string;

  @Input() public iconClass: string;

  /**
   * Doit correspondre à la négation de state.closed du widget.
   */
  @Input() public active: boolean = false;

  @Output() public activeChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  public disabledColor = 'rgb(160, 160, 160)';

  public themeColor: string;

  public zIndex: number;

  constructor(@Inject(APP_CONFIG) appConfig: AppConfig) {
    this.themeColor = appConfig.themeColor;
  }

  ngOnInit() {
  }

  public handleButtonClick(event: any) {
    this.active = !this.active;
    this.activeChange.emit(this.active);
  }

}
