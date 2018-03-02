import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SncfThemeComponent } from './sncf-theme.component';

describe('SncfThemeComponent', () => {
  let component: SncfThemeComponent;
  let fixture: ComponentFixture<SncfThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SncfThemeComponent ]
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
});
