import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetHeaderComponent } from "./widget-header.component";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { APP_CONFIG, AppConfig } from "../../../core/model/app.config";
import WidgetState from "../../model/widget-state";

describe("WidgetHeaderComponent", () => {
  const testAppConfig: AppConfig = {
    themeColor: "black",
    apiVersion: "4.6",
    appName: "Test",
  };

  let component: WidgetHeaderComponent;
  let fixture: ComponentFixture<WidgetHeaderComponent>;
  let debugElement: DebugElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetHeaderComponent],
        providers: [{ provide: APP_CONFIG, useValue: testAppConfig }],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css("div"));
  });

  it("Peut être créé", () => {
    expect(component).toBeTruthy();
  });

  it("N'affiche aucun bouton si tous les flags sont falsy", () => {
    expect(component).toBeTruthy();
    component.closable = false;
    component.foldable = false;
    component.anchorable = false;
    fixture.detectChanges();

    // vérifie qu'il n'y aucun bouton dans la barre de titre
    const buttons = (debugElement.nativeElement as HTMLElement).querySelectorAll(
      "button",
    );
    expect(buttons.length).toBe(0);
  });

  it("doit afficher un bouton fermer si `closable` est vrai", () => {
    expect(component).toBeTruthy();
    component.closable = true;
    component.foldable = false;
    component.anchorable = false;
    fixture.detectChanges();

    // vérifie qu'il n'y a qu'un bouton dans la barre de titre
    const buttons: NodeListOf<
      HTMLButtonElement
    > = debugElement.nativeElement.querySelectorAll("button");
    expect(buttons.length).toBe(1);

    expect(buttons[0].title).toBe("Fermer");
  });

  // pour les tests suivant, on généralise la conf, le widget affiche les 3 boutons.
  const getButtonsForState = (
    state: WidgetState,
  ): NodeListOf<HTMLButtonElement> => {
    component.closable = true;
    component.foldable = true;
    component.anchorable = true;
    component.state = state;
    fixture.detectChanges();
    return debugElement.nativeElement.querySelectorAll("button");
  };

  describe("Libellés des boutons", () => {

    it("doit afficher les libellés 'Réduire' et 'Détacher' si le widget est déplié et flottant", () => {
      const state = {
        anchored: false,
        closed: false,
        folded: false,
      };

      const buttons = getButtonsForState(state);

      expect(buttons.length).toBe(3);
      expect(buttons[0].title).toBe("Réduire");
      expect(buttons[1].title).toBe("Ancrer");
      expect(buttons[2].title).toBe("Fermer");
    });

    it("doit afficher les libellés 'Agrandir' et 'Détacher' si le widget est plié et ancré", () => {
      const state = {
        anchored: true,
        closed: true,
        folded: true,
      };

      const buttons = getButtonsForState(state);

      expect(buttons.length).toBe(3);
      expect(buttons[0].title).toBe("Agrandir");
      expect(buttons[1].title).toBe("Détacher");
      expect(buttons[2].title).toBe("Fermer");
    });

  });

  describe("Evènements", () => {
    let buttons: HTMLButtonElement[];
    beforeEach(() => {
      buttons = getButtonsForState({
        anchored: true,
        closed: true,
        folded: true,
      });
    });

    it("génère un évènement close lors d'un clic sur fermer", done => {
      component.stateChange.subscribe(state => {
        expect(state.closed).toBe(false);
        done();
      });

      buttons[2].click();
    });

    it("génère un évènement detach lors d'un clic sur detacher", done => {
      component.stateChange.subscribe(state => {
        expect(state.anchored).toBe(false);
        done();
      });

      buttons[1].click();
    });

    it("génère un évènement déplier lors d'un clic sur agrandire", done => {
      component.stateChange.subscribe(state => {
        expect(state.folded).toBe(false);
        done();
      });

      buttons[0].click();
    });

  });

});
