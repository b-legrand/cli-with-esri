import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from "@angular/core";

/**
 * Directive appliquant une opacité de 0,5 si l'échelle fournie est hors des bornes.
 * On vérifie principalement que 1/minScale < 1/scale < 1/maxScale
 * Si l'échelle est undefined, l'opacité est mise à 1.
 */
@Directive({
  selector: "[visibleForScale]",
})
export class VisibleForScaleDirective implements OnChanges {
  /**
   * Echelle
   */
  @Input("visibleForScale") public scale: number;

  /**
   * Echelle min.
   */
  @Input() public minScale: number;

  /**
   * Echelle max.
   */
  @Input() public maxScale: number;

  constructor(private el: ElementRef) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.scale) {
      if (this.isVisibleForScale(this.scale)) {
        this.el.nativeElement.style.opacity = 1;
      } else {
        this.el.nativeElement.style.opacity = 0.5;
      }
    }
  }

  private isVisibleForScale(scale: number): boolean {
    if (!scale) {
      return true;
    }
    const greaterThanMin = 1 / this.minScale <= 1 / scale;
    const lessThanMax = 1 / scale <= 1 / this.maxScale;
    return greaterThanMin && lessThanMax;
  }
}
