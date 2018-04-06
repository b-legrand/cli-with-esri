import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MapPageComponent } from "./map-page.component";
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";

describe("HomePageComponent", () => {
  let component: MapPageComponent;
  let fixture: ComponentFixture<MapPageComponent>;
  let debugElement: DebugElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [MapPageComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
