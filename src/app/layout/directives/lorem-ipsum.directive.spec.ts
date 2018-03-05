import { LoremIpsumDirective } from './lorem-ipsum.directive';
import { Component, DebugElement, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {EsriMapService} from '../../map/services/esri-map.service';
import EsriLoaderService from '../../map/services/esri-loader.service';
import {APP_CONFIG, DEFAULT_APP_CONFIG} from '../../core/model/app.config';

// composant de test
@Component({
  template: `<div loremIpsum [words]="wordCount"></div>`
})
class TestLoremIpsumComponent {
  @Input() public wordCount: number;
}


describe('LoremIpsumDirective', () => {

  let component: TestLoremIpsumComponent;
  let fixture: ComponentFixture<TestLoremIpsumComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestLoremIpsumComponent, LoremIpsumDirective],
    });
    fixture = TestBed.createComponent(TestLoremIpsumComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('div'));
  });

  it('doit avoir du contenu généré dans innerHTML', () => {
    fixture.detectChanges();
    const divElement: HTMLElement = debugElement.nativeElement;
    console.log(divElement.innerHTML);
    expect(divElement.innerHTML).toBeDefined();
    expect(divElement.innerHTML).toContain('Lorem ipsum');
  });

  it('le nombre de mots peut être passé en entrée.', () => {
    component.wordCount = 10;
    fixture.detectChanges();
    const divElement: HTMLElement = debugElement.nativeElement;
    console.log(divElement.innerText);
    expect(divElement.innerHTML).toBeDefined();
    expect(divElement.innerHTML).toContain('Lorem ipsum');
    expect(divElement.innerHTML.split(' ').length).toBeLessThan(11);
  });

});
