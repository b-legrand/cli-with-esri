import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomePageComponent } from "./home-page.component";
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";

describe("HomePageComponent", () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let debugElement: DebugElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HomePageComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
