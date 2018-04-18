import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ButtonToolbarComponent } from "./button-toolbar.component";

describe("ButtonToolbarComponent", () => {
  let component: ButtonToolbarComponent;
  let fixture: ComponentFixture<ButtonToolbarComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ButtonToolbarComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("orientation", () => {
    it("peut être positionné verticalement", () => {});
    it("peut être positionné verticalement", () => {});
  });

  describe("position", () => {
    it("peut être positionné à gauche", () => {});
    it("peut être positionné droite", () => {});
  });

  describe("bouton plus", () => {
    it("affiche un bouton + quand le contenu déborde", () => {});
  });
});
