import {Component, OnInit, Input, ViewContainerRef, ViewChild} from '@angular/core';

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

  @ViewChild('vc', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;

  @Input() public position: string;

  @Input() public width = 320;

  public scrollEnabled = false;

  public zoneStyle: any = {
    left: '62px',
    right: '62px',
    position: 'absolute',
    top: 'calc(2.5em + 15px)',
    bottom: '15px',
    height: 'calc(100vh  - 2.5em  - 15px * 2)',
  };

  constructor() { }

  /**
   * initialize la zone selon le paramètre position.
   * valeurs possible : left, right ou rien (free zone)
   */
  ngOnInit() {
    if (this.position === 'left') {
      delete this.zoneStyle.right;
      this.zoneStyle['width.px'] = this.width;
    }
    if (this.position === 'right') {
      delete this.zoneStyle.left;
      this.zoneStyle['width.px'] = this.width;
    }
  }

}
