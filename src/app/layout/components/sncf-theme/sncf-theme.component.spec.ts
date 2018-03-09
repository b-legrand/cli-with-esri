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
      providers: [{ provide: APP_CONFIG, testConfig }]
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

  it('has generated a `<style> tag`', () => {
    document.styleSheets.length;
  });
});
