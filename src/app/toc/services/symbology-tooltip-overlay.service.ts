import { Injectable, ElementRef, ComponentRef } from "@angular/core";
import { OverlayConfig, Overlay, OverlayRef, ConnectionPositionPair } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { SymbologyTooltipComponent } from "../components/symbology-tooltip/symbology-tooltip.component";

@Injectable({
  providedIn: "root",
})
export class SymbologyTooltipOverlayService {
  /**
   * référence vers l'overlay @angular/cdk
   */
  private overlayRef: OverlayRef;

  /**
   * Référence vers le composant.
   */
  private componentRef: ComponentRef<SymbologyTooltipComponent>;

  constructor(private overlay: Overlay) {}

  public open(layerUid: string, elementRef: ElementRef) {
    // Returns an OverlayRef which is a PortalHost
    this.overlayRef = this.createOverlay(elementRef);

    // Create ComponentPortal that can be attached to a PortalHost
    const tooltipPortal = new ComponentPortal(SymbologyTooltipComponent);

    // Attach ComponentPortal to PortalHost
    this.componentRef = this.overlayRef.attach(tooltipPortal);

    // fournit l'uid au composant
    this.componentRef.instance.layerUid = layerUid;
  }

  /**
   * Ferme le tooltip
   */
  public close(): void {
    this.overlayRef.dispose();
  }

  private createOverlay(elementRef: ElementRef): OverlayRef {
    const overlayConfig = this.createOverlayConfig(elementRef);
    return this.overlay.create(overlayConfig);
  }

  private createOverlayConfig(elementRef: ElementRef): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo({ nativeElement: elementRef })
      .withPositions([
        {
          originX: "end",
          originY: "center",
          overlayX: "start",
          overlayY: "center",
        },
        {
          originX: "start",
          originY: "center",
          overlayX: "end",
          overlayY: "center",
        },
      ])
      .withDefaultOffsetX(5)
      .withViewportMargin(15);

    const overlayConfig = new OverlayConfig({
      hasBackdrop: false,
      panelClass: "symbology-tooltip-panel",
      backdropClass: "symbology-tooltip-container",
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy,
    });

    return overlayConfig;
  }
}
