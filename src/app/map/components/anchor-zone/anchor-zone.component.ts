import { Component, OnInit, Input } from '@angular/core';

/**
 * La zone d'ancrage permets de regrouper les widgets socle dont l'état est à anchored.
 * L'élément du dom ou lui est fourni par l'appelant.
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

  /**
   * initialize la zone selon le paramètre position.
   * valeurs possible : left, right ou rien (free zone)
   */
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
