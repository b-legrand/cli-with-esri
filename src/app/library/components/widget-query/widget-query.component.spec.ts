import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetQueryComponent } from "./widget-query.component";
import { WidgetModule } from "../../../widget/widget.module";
import { MapModule } from "../../../map/map.module";

describe("WidgetQueryComponent", () => {
  let component: WidgetQueryComponent;
  let fixture: ComponentFixture<WidgetQueryComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetQueryComponent],
        imports: [WidgetModule, MapModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
