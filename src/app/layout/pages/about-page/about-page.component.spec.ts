import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SidebarModule } from "primeng/sidebar";

import { AboutPageComponent } from "./about-page.component";
import { SidebarPageComponent } from "../../components/sidebar-page/sidebar-page.component";

describe("AboutPageComponent", () => {
  let component: AboutPageComponent;
  let fixture: ComponentFixture<AboutPageComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AboutPageComponent, SidebarPageComponent],
        imports: [SidebarModule, RouterModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
