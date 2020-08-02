import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SidebarPageComponent } from "./sidebar-page.component";
import { SidebarModule } from "primeng/sidebar";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { Router } from "@angular/router";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";

describe("SidebarPageComponent", () => {
  let component: SidebarPageComponent;
  let fixture: ComponentFixture<SidebarPageComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SidebarPageComponent],
        imports: [SidebarModule, PerfectScrollbarModule, NoopAnimationsModule],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [{ provide: Router }],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
