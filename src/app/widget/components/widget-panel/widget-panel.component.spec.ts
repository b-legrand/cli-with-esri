import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPanelComponent } from './widget-panel.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('WidgetPanelComponent', () => {
  let component: WidgetPanelComponent;
  let fixture: ComponentFixture<WidgetPanelComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('.widget-panel'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a resizable button when [resizable]="true"', () => {
    expect(component).toBeTruthy();
    component.resizable = true;
    fixture.detectChanges();
    debugElement.query(By.css('.widget-resize-button'));
  });

  it('should not have a resizable button when [resizable]="false"', () => {
    expect(component).toBeTruthy();
    component.resizable = false;
    fixture.detectChanges();
  });

});
