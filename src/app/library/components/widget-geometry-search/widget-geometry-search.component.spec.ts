import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetGeometrySearchComponent } from "./widget-geometry-search.component";
import { AccordionModule } from "primeng/primeng";

describe("WidgetGeometrySearchComponent", () => {
  let component: WidgetGeometrySearchComponent;
  let fixture: ComponentFixture<WidgetGeometrySearchComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetGeometrySearchComponent],
        imports: [AccordionModule],
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
