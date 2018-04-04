import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetPrintComponent } from "./widget-print.component";
import { WidgetModule } from "../../../widget/widget.module";
import { MapModule } from "../../../map/map.module";

describe("WidgetPrintComponent", () => {
  let component: WidgetPrintComponent;
  let fixture: ComponentFixture<WidgetPrintComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetPrintComponent],
        imports: [WidgetModule, MapModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
