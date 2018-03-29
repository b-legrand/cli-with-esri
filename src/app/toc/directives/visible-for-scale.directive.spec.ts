import { VisibleForScaleDirective } from "./visible-for-scale.directive";
import { Component, DebugElement, Input } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

/**
 * Composant de test de la directive visibleForScale.
 */
@Component({
  template: `<div [visibleForScale]="scale"
                  [minScale]="minScale"
                  [maxScale]="maxScale"
              ></div>`,
})
class TestVisibleForScaleComponent {
  @Input() public scale: number;
  @Input() public minScale: number;
  @Input() public maxScale: number;
}

describe("VisibleForScaleDirective", () => {
  let component: TestVisibleForScaleComponent;
  let fixture: ComponentFixture<TestVisibleForScaleComponent>;
  let debugElement: DebugElement;
  const scale = 720;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestVisibleForScaleComponent, VisibleForScaleDirective],
    });
    fixture = TestBed.createComponent(TestVisibleForScaleComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css("div"));
  });

  describe("mets l'opacité à 1", () => {
    it("quand l'échelle est indéfinie", () => {
      // prepare
      component.scale = undefined;
      // execute
      fixture.detectChanges();
      // verifie
      expect(debugElement.nativeElement.style.opacity).toBe("1");
    });

    it("quand l'échelle est incluse dans l'intervalle 1/minScale <--> 1/maxScale", () => {
      // prepare
      component.scale = 500;
      component.minScale = 1500;
      component.maxScale = 70;
      // execute
      fixture.detectChanges();
      // verifie
      expect(debugElement.nativeElement.style.opacity).toBe("1");
    });
  });

  describe("mets l'opacité à 0.5", () => {
    it("quand 1/scale est supérieure à 1/maxScale", () => {
      // prepare
      component.scale = 50;
      component.minScale = 200;
      component.maxScale = 100;
      // execute
      fixture.detectChanges();
      // verifie
      expect(debugElement.nativeElement.style.opacity).toBe("0.5");
    });

    it("quand 1/scale est inférieure à 1/minScale", () => {
      // prepare
      component.scale = 300;
      component.minScale = 200;
      component.maxScale = 100;
      // execute
      fixture.detectChanges();
      // verifie
      expect(debugElement.nativeElement.style.opacity).toBe("0.5");
    });
  });
});
