import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetQueryComponent } from "./widget-query.component";

describe("WidgetQueryComponent", () => {
  let component: WidgetQueryComponent;
  let fixture: ComponentFixture<WidgetQueryComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetQueryComponent],
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
