import {TestBed, inject, ComponentFixture} from '@angular/core/testing';

import { EsriMapService } from './esri-map.service';
import EsriLoaderService from './esri-loader.service';
import {APP_CONFIG, DEFAULT_APP_CONFIG} from '../../core/model/app.config';
import {Component, DebugElement, ElementRef} from '@angular/core';
import {By} from '@angular/platform-browser';


describe('MapService', () => {
  let element: HTMLElement;
  let mapService: EsriMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EsriMapService,
        EsriLoaderService,
        {
          provide: APP_CONFIG,
          useValue: DEFAULT_APP_CONFIG
        }
      ]
    });
    mapService = TestBed.get(EsriMapService);
    element = document.createElement('div');
    element.id = 'map-container';
  });

  it('should be created', inject([EsriMapService], (service: EsriMapService) => {
    expect(service).toBeTruthy();
  }));

  it('can be asked to provide a map', inject([EsriMapService], (service: EsriMapService, done) => {
    service.loadMap(
      { basemap: 'streets'},
      { zoom: 6, center: []},
      element
      ).then(items => {
        expect(items.map).toBeTruthy();
        expect(items.mapView).toBeTruthy();
      done();
    }).catch(reason => {
      done.fail(reason);
    });
  }));

});
