import { TestBed, inject } from '@angular/core/testing';

import { EsriLoaderService } from './esri-loader.service';
import {APP_CONFIG} from '../../core/model/app.config';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('MapService', () => {
  const testAppConfig = {
    apiVersion: '4.6'
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EsriLoaderService,
        {
          provide: APP_CONFIG,
          useValue: testAppConfig,
        }
      ]
    });
  });

  it('doit être créé', inject([EsriLoaderService], (service: EsriLoaderService) => {
    expect(service).toBeTruthy();
  }));

  it('doit permettre ', inject([EsriLoaderService], (service: EsriLoaderService) => {
    expect(service).toBeTruthy();
  }));

});
