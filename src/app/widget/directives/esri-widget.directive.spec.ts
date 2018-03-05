import { EsriWidgetDirective } from './esri-widget.directive';
import {Component, DebugElement} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {EsriMapService} from '../../map/services/esri-map.service';
import EsriLoaderService from '../../map/services/esri-loader.service';
import {APP_CONFIG, DEFAULT_APP_CONFIG} from '../../core/model/app.config';
import {EsriMapComponent} from '../../map/components';
import {ProgressSpinnerModule} from 'primeng/primeng';

// pour tester une directive, on créé un composant de test
@Component({
  template: `<esri-map><div id="mon-widget" esriWidget>Hello world</div></esri-map>`
})
class TestEsriWidgetComponent {
}


describe('EsriWidgetDirective', () => {

  let component: TestEsriWidgetComponent;
  let fixture: ComponentFixture<TestEsriWidgetComponent>;
  let mapEl: DebugElement;
  let widgetEl: DebugElement;
  let mapService: EsriMapService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestEsriWidgetComponent, EsriWidgetDirective, EsriMapComponent],
      providers: [
        EsriMapService,
        EsriLoaderService,
        { provide: APP_CONFIG, useValue: DEFAULT_APP_CONFIG },
      ],
      imports: [ProgressSpinnerModule]
    });
    fixture = TestBed.createComponent(TestEsriWidgetComponent);
    mapService = TestBed.get(EsriMapService);
    component = fixture.componentInstance;
    mapEl = fixture.debugElement.query(By.css('#esri-map'));
  });

  it('should create an instance', () => {
    const directive = new EsriWidgetDirective(mapEl, mapService);
    expect(directive).toBeTruthy();
  });

  it('should render defaults', () => {
    widgetEl = fixture.debugElement.query(By.css('#mon-widget'));
    expect(widgetEl).toBeTruthy();
  });
});
