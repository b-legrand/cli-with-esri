import { Directive, OnInit, ElementRef, Input } from '@angular/core';
import { EsriMapService } from '../../map/services/esri-map.service';

/**
 * But de cette directive :
 * cacher les manipulations du dom faites par un composant qui veut s'inscrire en tant que widget esri.
 */
@Directive({
  selector: '[esriWidget]'
})
export class EsriWidgetDirective  implements OnInit {

  @Input() position: string;

  @Input() index: number;

  private el: HTMLElement;

  constructor(el: ElementRef, private mapService: EsriMapService) {
    this.el = el.nativeElement;
  }

  ngOnInit() {
    this.mapService.isLoaded.subscribe(() => {
      // after map is loaded then add widget
      this.mapService.addWidget(this.el, this.position);
    });
  }

}
