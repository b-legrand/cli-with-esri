import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetLayerListComponent } from "./widget-layer-list.component";
import { WidgetModule } from "../../../widget/widget.module";
import { MapModule } from "../../../map/map.module";

describe("WidgetLayerListComponent", () => {
  let component: WidgetLayerListComponent;
  let fixture: ComponentFixture<WidgetLayerListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetLayerListComponent],
        imports: [WidgetModule, MapModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetLayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
