import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandButtonComponent } from './expand-button.component';
import { APP_CONFIG } from '../../../core/model/app.config';
import {TooltipModule} from 'primeng/primeng';

describe('ExpandButtonComponent', () => {
  let component: ExpandButtonComponent;
  let fixture: ComponentFixture<ExpandButtonComponent>;
  const testAppConfig = { themeColor: 'black' };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandButtonComponent ],
      providers: [ { provide: APP_CONFIG, useValue: testAppConfig }],
      imports: [ TooltipModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('doit afficher l\icone dans un élément <i>', () => {
    component.iconClass = 'esri-icon-toto';
    component.active = false;
    fixture.detectChanges();

    const icone = fixture.nativeElement.querySelector('i');
    expect(icone.class).toBe('esri-icon-toto');
  });

  it('le titre est inséré dans l\'attribut titre du bouton', () => {
    component.iconClass = 'esri-icon-toto';
    component.title = 'Mon widget';
    component.active = false;

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');
    const icone = fixture.nativeElement.querySelector('i');

    expect(button.title).toBe('Mon widget');
    expect(icone.class).toBe('esri-icon-toto');

  });

  it('l\icone est grise quand le bouton est inactif', () => {
    component.iconClass = 'esri-icon-toto';
    component.title = 'Mon widget';
    component.active = false;

    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    const icone = fixture.nativeElement.querySelector('i');

    expect(button.title).toBe('Mon widget');
    expect(icone.class).toBe('esri-icon-toto');

  });
});
