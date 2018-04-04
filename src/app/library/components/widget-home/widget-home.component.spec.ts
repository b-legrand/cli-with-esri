import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetHomeComponent } from "./widget-home.component";
import { WidgetModule } from "../../../widget/widget.module";
import { MapModule } from "../../../map/map.module";

describe("WidgetHomeComponent", () => {
  let component: WidgetHomeComponent;
  let fixture: ComponentFixture<WidgetHomeComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetHomeComponent],
        imports: [WidgetModule, MapModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
