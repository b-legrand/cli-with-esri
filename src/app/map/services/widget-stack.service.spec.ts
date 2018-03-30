import { inject, TestBed } from "@angular/core/testing";

import { WidgetStackService } from "./widget-stack.service";


describe("WidgetStackService", () => {
  let element: HTMLElement;
  let widgetStackService: WidgetStackService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WidgetStackService,
      ],
    });
    widgetStackService = TestBed.get(WidgetStackService);
    element = document.createElement("div");
    element.id = "map-container";
  });

  it("should be created", inject([WidgetStackService], (service: WidgetStackService) => {
    expect(service).toBeTruthy();
  }));

});
