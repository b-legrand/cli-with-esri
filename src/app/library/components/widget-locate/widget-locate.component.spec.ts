import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetLocateComponent } from './widget-locate.component';

describe('WidgetLocateComponent', () => {
  let component: WidgetLocateComponent;
  let fixture: ComponentFixture<WidgetLocateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetLocateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetLocateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
