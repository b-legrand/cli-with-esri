import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsriLoaderService } from '../../../map/services/esri-loader.service';

import { WidgetCompassComponent } from './widget-compass.component';
import { MapModule } from '../../../map/map.module';

describe('WidgetCompassComponent', () => {
  let component: WidgetCompassComponent;
  let fixture: ComponentFixture<WidgetCompassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MapModule ],
      declarations: [ WidgetCompassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCompassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
