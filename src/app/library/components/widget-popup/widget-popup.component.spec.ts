import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPopupComponent } from './widget-popup.component';

describe('WidgetPopupComponent', () => {
  let component: WidgetPopupComponent;
  let fixture: ComponentFixture<WidgetPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
