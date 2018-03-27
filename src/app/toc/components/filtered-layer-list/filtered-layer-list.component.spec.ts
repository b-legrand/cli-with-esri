import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredLayerListComponent } from './filtered-layer-list.component';

describe('FilteredLayerListComponent', () => {
  let component: FilteredLayerListComponent;
  let fixture: ComponentFixture<FilteredLayerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredLayerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredLayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
