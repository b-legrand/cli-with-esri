import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetZoomComponent } from "./widget-zoom.component";
import { WidgetModule } from "../../../widget/widget.module";
import { MapModule } from "../../../map/map.module";

describe("WidgetZoomComponent", () => {
  let component: WidgetZoomComponent;
  let fixture: ComponentFixture<WidgetZoomComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetZoomComponent],
        imports: [WidgetModule, MapModule],
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
