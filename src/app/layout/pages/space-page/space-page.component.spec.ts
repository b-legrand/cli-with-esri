import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SpacePageComponent } from "./space-page.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("SpacePageComponent", () => {
  let component: SpacePageComponent;
  let fixture: ComponentFixture<SpacePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
          SpacePageComponent,
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
