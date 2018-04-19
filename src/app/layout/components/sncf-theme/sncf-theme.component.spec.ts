import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SncfThemeComponent } from "./sncf-theme.component";
import { APP_CONFIG } from "../../../core/models/app.config";

describe("SncfThemeComponent", () => {
  const testConfig = { themeColor: "black" };
  let component: SncfThemeComponent;
  let fixture: ComponentFixture<SncfThemeComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SncfThemeComponent],
        providers: [{ provide: APP_CONFIG, useValue: testConfig }],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SncfThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("can generate the css with the provided theme color", () => {
    expect(component.customCss).toMatch(/color\: black/);
    expect(component.customCss).toMatch(/stroke\: black/);
  });

  it("a généré une balise `<style>`", () => {
    expect(document.styleSheets.length).toBeGreaterThan(0);
  });

  describe("a généré des sélecteurs css", () => {
    let styles: CSSStyleSheet;

    beforeEach(() => {
      const styleElement: HTMLStyleElement = document.querySelector("style[data-sncf-theme]");
      styles = styleElement.sheet as CSSStyleSheet;
    });

    // vérifie qu'une règle existe pour le css selector
    const ruleExistAndContains = (selector: string, attribute?: string, value?: string) => {
      let foundRule: CSSStyleRule;
      for (let i = 0; i < styles.cssRules.length; i++) {
        if (styles.cssRules[i].cssText === selector) {
          foundRule = styles.cssRules[i] as CSSStyleRule;
          expect(foundRule).toBeDefined();
          if (attribute) {
            expect(foundRule.style[attribute]).toBeDefined();
          }
          if (attribute && value) {
            expect(foundRule.style[attribute]).toBe(value);
          }
          break;
        }
      }
      if (!foundRule) {
      }
    };

    it("pour la couleur des titres", () => {
      ruleExistAndContains("h1,h2,h3,h4,h5,h6", "color");
    });

    it("pour le spinner primeng", () => {
      ruleExistAndContains(".ui-progress-spinner", "stroke", "black");
    });
    it("pour des classes custom", () => {
      ruleExistAndContains(".sncf-color, .couleur-theme");
    });
  });
});
