import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetZoomComponent } from "./widget-zoom.component";

describe("WidgetZoomComponent", () => {
  let component: WidgetZoomComponent;
  let fixture: ComponentFixture<WidgetZoomComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetZoomComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
