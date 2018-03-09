import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPrintComponent } from './widget-print.component';

describe('WidgetPrintComponent', () => {
  let component: WidgetPrintComponent;
  let fixture: ComponentFixture<WidgetPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
