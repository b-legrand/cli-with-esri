import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetLegendComponent } from "./widget-legend.component";
import { MapModule } from "../../../map/map.module";
import { WidgetModule } from "../../../widget/widget.module";

describe("WidgetLegendComponent", () => {
  let component: WidgetLegendComponent;
  let fixture: ComponentFixture<WidgetLegendComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetLegendComponent],
        imports: [MapModule, WidgetModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
