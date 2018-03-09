import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetComponent } from './widget.component';
import { WidgetHeaderComponent, WidgetPanelComponent } from '..';
import { Component } from '@angular/core';

describe('WidgetComponent', () => {
  let component: WidgetComponent;
  let fixture: ComponentFixture<WidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WidgetComponent,
        WidgetHeaderComponent,
        WidgetPanelComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('WidgetComponent Usage', () => {

    @Component({
      template: '<widget name="">Contenu du widget</widget>',
    })
    class TestWidgetWindowComponent{

    }
    let component: WidgetComponent;
    let fixture: ComponentFixture<WidgetComponent>;

  })
});
