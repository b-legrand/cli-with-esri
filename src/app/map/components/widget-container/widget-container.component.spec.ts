import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetContainerComponent } from './widget-container.component';
import { AnchorZoneComponent } from '..';
import { WidgetModule } from '../../../widget/widget.module';
import { WidgetStackService } from '../../services/widget-stack.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';
import { EsriMapService } from '../../services/esri-map.service';
import { MapModule } from '../../map.module';

describe('WidgetContainerComponent', () => {
  let component: WidgetContainerComponent;
  let fixture: ComponentFixture<WidgetContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ WidgetModule, PortalModule, MapModule ],
      declarations: [ WidgetContainerComponent, AnchorZoneComponent ],
      providers: [ WidgetStackService ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
