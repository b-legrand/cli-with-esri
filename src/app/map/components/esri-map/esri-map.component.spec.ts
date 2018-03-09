import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsriMapComponent } from './esri-map.component';
import { MapModule } from '../../map.module';
import { EsriMapService } from '../../services/esri-map.service';
import { EsriLoaderService } from '../../services/esri-loader.service';
import { WidgetModule } from '../../../widget/widget.module';
import { ProgressSpinnerModule } from 'primeng/primeng';
import { APP_CONFIG } from '../../../core/model/app.config';

describe('EsriMapComponent', () => {
  let component: EsriMapComponent;
  let fixture: ComponentFixture<EsriMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EsriMapComponent],
      imports: [ProgressSpinnerModule],
      providers: [
        EsriMapService,
        EsriLoaderService,
        { provider: APP_CONFIG, useValue: { apiVersion: "4.6" } }
      ],
    }).compileComponents();
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
