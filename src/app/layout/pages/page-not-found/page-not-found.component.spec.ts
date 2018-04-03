import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PageNotFoundComponent } from "./page-not-found.component";
import { DebugElement } from "@angular/core";

describe("PageNotFoundComponent", () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let debugElement: DebugElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [PageNotFoundComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should contain 404 error message", () => {
    expect(debugElement).toBeTruthy();
    expect(debugElement.nativeElement).toBeTruthy();
    expect(debugElement.nativeElement.textContent).toContain("Page not found");
  });
});
