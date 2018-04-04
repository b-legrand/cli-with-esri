import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetBasemapToggleComponent } from "./widget-basemap-toggle.component";
import { MapModule } from "../../../map/map.module";
import { WidgetModule } from "../../../widget/widget.module";

describe("WidgetBasemapToggleComponent", () => {
  let component: WidgetBasemapToggleComponent;
  let fixture: ComponentFixture<WidgetBasemapToggleComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetBasemapToggleComponent],
        imports: [MapModule, WidgetModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetBasemapToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
