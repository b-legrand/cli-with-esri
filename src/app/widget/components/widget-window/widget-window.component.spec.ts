import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetWindowComponent } from './widget-window.component';
import { WidgetHeaderComponent, WidgetPanelComponent } from '..';
import {Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement} from '@angular/core';
import WidgetState from '../../model/widget-state';
import {WidgetConfig} from '../../model/widget-config';
import {By} from '@angular/platform-browser';

describe('WidgetWindowComponent', () => {
  let component: WidgetWindowComponent;
  let fixture: ComponentFixture<WidgetWindowComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WidgetWindowComponent,
        WidgetHeaderComponent,
        WidgetPanelComponent,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('WidgetWindowComponent Usage', () => {

    @Component({
      template: `<widget-window key="mon-widget"
                                [title]="'Mon widget'"
                                [icon]="'esri-icon-class'"
                  >Contenu du widget</widget-window>`,
    })
    class TestWidgetWindowComponent {
        public state: WidgetState;
        public config: WidgetConfig;
    }

    let wrapperComponent: TestWidgetWindowComponent;
    let wrapperfixture: ComponentFixture<TestWidgetWindowComponent>;

    beforeEach(() => {
      wrapperfixture = TestBed.createComponent(WidgetWindowComponent);
      wrapperComponent = fixture.componentInstance;
      wrapperfixture.detectChanges();
      debugElement = wrapperfixture.debugElement;
    });

    it('should create', () => {
      expect(wrapperComponent).toBeTruthy();
    });

    it('should create', () => {
      wrapperComponent.state = {
        folded: true,
        anchored: true,
        closed: true,
      };
      expect(wrapperComponent).toBeTruthy();
      debugElement.queryAll(By.css('.widget-panel'));
    });
    it('should create', () => {
      expect(wrapperComponent).toBeTruthy();
    });
  });
});
