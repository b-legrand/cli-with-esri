import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SncfHeaderComponent } from './sncf-header.component';

describe('SncfHeaderComponent', () => {
  let component: SncfHeaderComponent;
  let fixture: ComponentFixture<SncfHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SncfHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SncfHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
