import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandButtonComponent } from './expand-button.component';
import { APP_CONFIG } from '../../../core/model/app.config';
import {TooltipModule} from 'primeng/primeng';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ExpandButtonComponent', () => {
  let component: ExpandButtonComponent;
  let fixture: ComponentFixture<ExpandButtonComponent>;
  let debugElement: DebugElement;

  // données de test
  const appConfig = { themeColor: 'black' };
  const widgetTitle = 'Mon widget';
  const widgetIcon = 'esri-icon-collection';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandButtonComponent ],
      providers: [ { provide: APP_CONFIG, useValue: appConfig }],
      imports: [ TooltipModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('doit afficher l\icone dans un élément <i>', () => {
    component.iconClass = widgetIcon;
    component.active = false;
    fixture.detectChanges();

    const icones: DebugElement = debugElement.query(By.css('i'));
    expect(icones).toBeDefined();
    expect(icones.nativeElement.className).toContain(widgetIcon);
  });

  it('le titre est inséré dans l\'attribut titre du bouton', () => {
    component.iconClass = widgetIcon;
    component.title = widgetTitle;
    component.active = false;

    fixture.detectChanges();

    const button: DebugElement = debugElement.query(By.css('button'));
    expect(button.nativeElement).toBeDefined();
    expect(button.nativeElement.title).toBe(widgetTitle);

    const icon: DebugElement = debugElement.query(By.css('i'));
    expect(icon.nativeElement).toBeDefined();
    expect(icon.nativeElement.className).toBe(widgetIcon);

  });

  it('l\icone est de la couleur du thème quand le bouton est actif', () => {
    component.iconClass = widgetIcon;
    component.title = widgetTitle;
    component.active = true;

    fixture.detectChanges();

    const button: DebugElement = debugElement.query(By.css('button'));
    const icon: DebugElement = debugElement.query(By.css('i'));

    expect(button.nativeElement.title).toBe(widgetTitle);
    expect(icon.nativeElement).toBeDefined();
    expect(icon.nativeElement.className).toBe(widgetIcon);
    expect(icon.nativeElement.style.color).toBe(appConfig.themeColor);

  });

  it('l\icone est de couleur grise quand le bouton est inactif', () => {
    component.iconClass = widgetIcon;
    component.title = widgetTitle;
    component.active = false;

    fixture.detectChanges();

    const button: DebugElement = debugElement.query(By.css('button'));
    const icon: DebugElement = debugElement.query(By.css('i'));

    expect(button.nativeElement.title).toBe(widgetTitle);
    expect(icon.nativeElement).toBeDefined();
    expect(icon.nativeElement.className).toBe(widgetIcon);
    expect(icon.nativeElement.style.color).toBe(component.disabledColor);

  });

});
