import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetBookmarkComponent } from './widget-bookmark.component';

describe('WidgetBookmarkComponent', () => {
  let component: WidgetBookmarkComponent;
  let fixture: ComponentFixture<WidgetBookmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetBookmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
