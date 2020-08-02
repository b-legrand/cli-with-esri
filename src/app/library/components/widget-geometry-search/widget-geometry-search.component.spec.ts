import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetGeometrySearchComponent } from "./widget-geometry-search.component";
import { AccordionModule } from "primeng/accordion";
import { WidgetModule } from "../../../widget/widget.module";
import { MapModule } from "../../../map/map.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

describe("WidgetGeometrySearchComponent", () => {
  let component: WidgetGeometrySearchComponent;
  let fixture: ComponentFixture<WidgetGeometrySearchComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetGeometrySearchComponent],
        imports: [
          WidgetModule,
          MapModule,
          AccordionModule,
          NoopAnimationsModule,
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetGeometrySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
