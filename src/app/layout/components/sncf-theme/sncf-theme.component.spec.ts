import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SncfThemeComponent } from './sncf-theme.component';
import {APP_CONFIG} from '../../../core/model/app.config';

describe('SncfThemeComponent', () => {
  const testConfig = { themeColor: 'black' };
  let component: SncfThemeComponent;
  let fixture: ComponentFixture<SncfThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SncfThemeComponent ],
      providers: [{ provide: APP_CONFIG, useValue: testConfig }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SncfThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can generate the css with the provided theme color', () => {
    expect(component.customCss).toMatch(/color :black/);
  });

  it('a généré une balise `<style>`', () => {
    expect(document.styleSheets.length).toBeGreaterThan(0);
  });

  describe('a généré des sélecteurs css', () => {
    let styles: CSSStyleSheet;

    beforeEach(() => {
      styles = document.styleSheets[0] as CSSStyleSheet;
    });

    // vérifie qu'une règle existe pour le css selector
    const ruleExistAndContains = (selector: string, attribute?: string, value?: string) => {
      const predicate = (rule: CSSStyleRule) => rule.selectorText === selector;
      let foundRule: CSSStyleRule;
      for (const iRule: CSSStyleRule of styles.cssRules) {
        if (iRule.selectorText === selector) {
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
    };

    it('pour la couleur des titres', () => {
      ruleExistAndContains('h1,h2,h3,h4,h5,h6', 'color');
    });

    it('pour le spinner primeng', () => {
      ruleExistAndContains('.ui-progress-spinner', 'stroke', 'black');
    });
    it('pour des classes custom', () => {
      ruleExistAndContains('.sncf-color, .couleur-theme');
    });
  });
});
