import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AnchorZoneComponent } from "./anchor-zone.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ScrollPanelModule } from "primeng/primeng";

describe("AnchorZoneComponent", () => {
  let component: AnchorZoneComponent;
  let fixture: ComponentFixture<AnchorZoneComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AnchorZoneComponent],
        imports: [ScrollPanelModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchorZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
