import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetLocateComponent } from "./widget-locate.component";
import { WidgetModule } from "../../../widget/widget.module";
import { MapModule } from "../../../map/map.module";

describe("WidgetLocateComponent", () => {
  let component: WidgetLocateComponent;
  let fixture: ComponentFixture<WidgetLocateComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetLocateComponent],
        imports: [WidgetModule, MapModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetLocateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
