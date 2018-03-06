import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsriMapComponent } from './esri-map.component';
import { MapModule } from '../../map.module';
import { EsriMapService } from '../../services/esri-map.service';
import { EsriLoaderService } from '../../services/esri-loader.service';
import { WidgetModule } from '../../../widget/widget.module';

describe('EsriMapComponent', () => {
  let component: EsriMapComponent;
  let fixture: ComponentFixture<EsriMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EsriMapComponent],
      providers: [EsriMapService, EsriLoaderService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsriMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
