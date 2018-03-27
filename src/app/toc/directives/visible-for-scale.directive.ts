import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

/**
 * Directive appliquant une opacité de 0,5 si l'échelle fournie est hors des bornes.
 */
@Directive({
  selector: '[visibleForScale]'
})
export class VisibleForScaleDirective implements OnChanges {

  /**
   * Echelle
   */
  @Input('visibleForScale') scale: number;

  /**
   * Echelle min.
   */
  @Input() minScale: number;

  /**
   * Echelle max.
   */
  @Input() maxScale: number;

  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.scale) {
      if (this.isVisibleForScale(this.scale)) {
        this.el.nativeElement.style.opacity = 1;
      } else {
        this.el.nativeElement.style.opacity = 0.5;
      }
    }
  }

  private isVisibleForScale(scale): boolean {
    if (!scale) {
      return true;
    }
    const greaterThanMin = (1 / this.minScale <= 1 / scale);
    const lessThanMax = (1 / scale <= 1 / this.maxScale);
    return greaterThanMin && lessThanMax;
  }

}
