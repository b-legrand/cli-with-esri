import { Component, OnInit, Input, QueryList, ContentChild, ContentChildren, AfterContentInit } from '@angular/core';
import { WidgetComponent } from '../../../widget/components';
import { EsriMapService } from '../../services/esri-map.service';
import { WidgetStateManager } from '../../../widget/services/widget-state-manager.service';

export enum WidgetContainerPosition {
  TOP_RIGHT,
  TOP_LEFT,
  BOTTOM_RIGHT,
  BOTTOM_LEFT,
  GLOBAL,
}
const zoneWidth = 320;
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
  @Input() public anchorZone: string;

  /**
   * top-left | top-right | bottom-left | bottom-right | manual
   */
  @Input() public position: string;

  public containerStyle: any = {
    left: '62px', // 15px + 32px + 15px (gouttière esri + taille bouton esri + gouttière)
    right: '62px',
    bottom: '15px',
    top: 'calc(2.5em + 15px)',
  };

  constructor(private esriMapService: EsriMapService, private widgetStateManager: WidgetStateManager) { }

  /**
   * initialize les zone selon le paramètre position.
   */
  ngOnInit() {
    // todo a faire aussi dans anchor-zone.
    if (this.position && this.position.endsWith('left')) {
      delete this.containerStyle.right;
      this.containerStyle['width.px'] = zoneWidth;
    }
    if (this.position && this.position.endsWith('right')) {
      delete this.containerStyle.left;
      this.containerStyle['width.px'] = zoneWidth;
    }
  }

  /**
   * Une fois dans cette fonction les widgets enfants sont disponibles
   */
  ngAfterContentInit() {
    // todo répartir les widgets selon leur état.
    // todo ajouter au WidgetManager.
    console.log(this.widgets);
    let index = 0;

    this.widgets.forEach(widget => this.widgetStateManager.addWidgetState(widget.state));
    this.widgets
    .filter(widget => widget.icon !== undefined)
    .forEach(widget => {
      widget.position = this.position;
      widget.index = index;
      widget.contentLoaded = true;
      index++;
    });
  }

}

export default WidgetContainerComponent;
