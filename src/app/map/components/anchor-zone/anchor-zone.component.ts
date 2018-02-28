import { Component, OnInit, Input } from '@angular/core';
import WidgetStateManager from '../../../widget/services/widget-state-manager.service';

/**
 * La zone d'ancrage permets de regrouper les widgets socle dont l'état est à anchored.
 *
 */
@Component({
  selector: 'anchor-zone',
  templateUrl: './anchor-zone.component.html',
  styleUrls: ['./anchor-zone.component.scss']
})
export class AnchorZoneComponent implements OnInit {

  @Input() position: string;

  public zoneStyle: any = {
    left: '2.5em',
    right: '2.5em',
    bottom: 0,
    top: '2.5em',
  };
  constructor() { }

  ngOnInit() {
    if (this.position === 'left') {
      delete this.zoneStyle.right;
      this.zoneStyle['width.px'] = '280';
    }
    if (this.position === 'right') {
      delete this.zoneStyle.left;
      this.zoneStyle['width.px'] = '280';
    }
  }

}
