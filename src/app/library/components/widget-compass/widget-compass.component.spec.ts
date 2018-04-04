import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetCompassComponent } from "./widget-compass.component";
import { MapModule } from "../../../map/map.module";
import { WidgetModule } from "../../../widget/widget.module";

describe("WidgetCompassComponent", () => {
  let component: WidgetCompassComponent;
  let fixture: ComponentFixture<WidgetCompassComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetCompassComponent],
        imports: [WidgetModule, MapModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCompassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
