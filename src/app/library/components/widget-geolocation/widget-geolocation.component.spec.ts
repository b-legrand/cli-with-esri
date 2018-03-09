import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetGeolocationComponent } from './widget-geolocation.component';
import { EsriLoaderService } from '../../../map/services/esri-loader.service';

describe('WidgetGeolocationComponent', () => {
  let component: WidgetGeolocationComponent;
  let fixture: ComponentFixture<WidgetGeolocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetGeolocationComponent ],
      providers: [ EsriLoaderService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetGeolocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
