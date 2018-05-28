import { TestBed, inject } from "@angular/core/testing";

import { SymbologyTooltipOverlayService } from "./symbology-tooltip-overlay.service";

describe("SymbologyTooltipOverlayService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SymbologyTooltipOverlayService],
    });
  });

  it(
    "should be created",
    inject([SymbologyTooltipOverlayService], (service: SymbologyTooltipOverlayService) => {
      expect(service).toBeTruthy();
    }),
  );
});
