import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SymbologyTooltipComponent } from "./symbology-tooltip.component";

describe("SymbologyTooltipComponent", () => {
  let component: SymbologyTooltipComponent;
  let fixture: ComponentFixture<SymbologyTooltipComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SymbologyTooltipComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SymbologyTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("a une méthode pour créer l'attribut src d'une image", () => {
    const expected = "data:image/png;base64,DATA";
    const result: any = component.createImageSource("image/png", "DATA");
    expect(component.createImageSource("image/png", "DATA")).toBe({ changingThisBreaksApplicationSecurity: expected });
  });
});
