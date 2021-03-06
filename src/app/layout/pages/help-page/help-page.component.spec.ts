import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { HelpPageComponent } from "./help-page.component";
import { SidebarModule, ScrollPanelModule } from "primeng/primeng";

describe("HelpPageComponent", () => {
  let component: HelpPageComponent;
  let fixture: ComponentFixture<HelpPageComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HelpPageComponent],
        imports: [SidebarModule, ScrollPanelModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
