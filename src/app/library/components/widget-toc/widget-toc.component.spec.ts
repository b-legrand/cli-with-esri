import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTocComponent } from './widget-toc.component';

describe('WidgetTocComponent', () => {
  let component: WidgetTocComponent;
  let fixture: ComponentFixture<WidgetTocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetTocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
