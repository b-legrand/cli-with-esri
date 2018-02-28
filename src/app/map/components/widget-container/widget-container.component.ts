import { Component, OnInit, Input, QueryList, ContentChild, ContentChildren, AfterContentInit } from '@angular/core';
import { WidgetComponent } from '../../../widget/components';

export enum WidgetContainerPosition {
  TOP_RIGHT,
  TOP_LEFT,
  BOTTOM_RIGHT,
  BOTTOM_LEFT,
  GLOBAL,
}
const zoneWidth = 280;
/**
 *
 */
@Component({
  selector: 'widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.scss']
})
export class WidgetContainerComponent implements OnInit, AfterContentInit {

  /**
   * Liste des widgets contenu dans ce conteneur.
   */
  @ContentChildren(WidgetComponent) widgets: QueryList<WidgetComponent>;

  /**
   * Zone d'ancrage pour ce conteneur.
  */
  @Input() anchorZone: string;

  @Input() position: string;

  public containerStyle: any = {
    left: '62px', // 15px + 32px + 15px (gouttière esri + taille bouton esri + gouttière)
    right: '62px',
    bottom: 0,
    top: 'calc(2.5em + 15px)',
  };

  constructor() { }

  ngOnInit() {
    // todo a mettre dans anchor-zone.
    if (this.position === 'left') {
      delete this.containerStyle.right;
      this.containerStyle['width.px'] = '280';
    }
    if (this.position === 'right') {
      delete this.containerStyle.left;
      this.containerStyle['width.px'] = '280';
    }
  }

  ngAfterContentInit() {
    // todo répartir les widgets selon leur état.
  }

}

export default WidgetContainerComponent;
