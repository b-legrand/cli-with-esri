import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFilterComponent } from './widget-filter.component';

describe('WidgetFilterComponent', () => {
  let component: WidgetFilterComponent;
  let fixture: ComponentFixture<WidgetFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
