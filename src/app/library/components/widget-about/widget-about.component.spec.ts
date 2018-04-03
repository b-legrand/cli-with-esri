import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

import { WidgetAboutComponent } from "./widget-about.component";

describe("WidgetAboutComponent", () => {
  let component: WidgetAboutComponent;
  let fixture: ComponentFixture<WidgetAboutComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetAboutComponent],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
