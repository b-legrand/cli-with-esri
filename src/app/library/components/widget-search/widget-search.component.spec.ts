import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSearchComponent } from './widget-search.component';

describe('WidgetSearchComponent', () => {
  let component: WidgetSearchComponent;
  let fixture: ComponentFixture<WidgetSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
