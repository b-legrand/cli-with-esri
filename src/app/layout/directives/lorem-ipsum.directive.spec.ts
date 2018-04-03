import { LoremIpsumDirective } from "./lorem-ipsum.directive";
import { Component, DebugElement, Input } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

// composant de test de la directive
@Component({
  template: `<div [loremIpsum]="wordCount"></div>`,
})
class TestLoremIpsumComponent {
  @Input() public wordCount: number;
}

describe("LoremIpsumDirective", () => {
  let component: TestLoremIpsumComponent;
  let fixture: ComponentFixture<TestLoremIpsumComponent>;
  let debugElement: DebugElement;
  const expectedText = "Lorem ipsum";

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestLoremIpsumComponent, LoremIpsumDirective],
    });
    fixture = TestBed.createComponent(TestLoremIpsumComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css("div"));
  });

  it("doit avoir du contenu généré dans innerHTML", () => {
    fixture.detectChanges();
    const divElement: HTMLElement = debugElement.nativeElement;
    expect(divElement.innerHTML).toBeDefined();
    expect(divElement.innerHTML).toContain(expectedText);
  });

  it("le nombre de mots peut être passé en entrée.", () => {
    component.wordCount = 10;
    fixture.detectChanges();
    const divElement: HTMLElement = debugElement.nativeElement;
    expect(divElement.innerHTML).toBeDefined();
    expect(divElement.innerHTML).toContain(expectedText);
    expect(divElement.innerHTML.split(" ").length).toBeLessThan(11);
  });

  it("un nombre de mots supérieur au texte de base génère du texte aléatoire.", () => {
    component.wordCount = 300;
    fixture.detectChanges();
    const divElement: HTMLElement = debugElement.nativeElement;
    expect(divElement.innerHTML).toBeDefined();
    expect(divElement.innerHTML).toContain(expectedText);
    expect(divElement.innerHTML.split(" ").length).toBeGreaterThan(280);
  });
});
