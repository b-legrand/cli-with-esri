import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorZoneComponent } from './anchor-zone.component';

describe('AnchorZoneComponent', () => {
  let component: AnchorZoneComponent;
  let fixture: ComponentFixture<AnchorZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnchorZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchorZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
