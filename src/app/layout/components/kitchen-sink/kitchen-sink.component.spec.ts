import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenSinkComponent } from './kitchen-sink.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('KitchenSinkComponent', () => {
  let component: KitchenSinkComponent;
  let fixture: ComponentFixture<KitchenSinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenSinkComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenSinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
