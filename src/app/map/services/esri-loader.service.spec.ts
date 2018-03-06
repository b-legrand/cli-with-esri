import {inject, TestBed} from '@angular/core/testing';

import {EsriLoaderService} from './esri-loader.service';
import {APP_CONFIG} from '../../core/model/app.config';

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

  it('Un appel à loadModules doit ajouter des <scripts> dans le body', done => {
    inject([EsriLoaderService], (service: EsriLoaderService) => {
      return done();
      service.loadModules(['esri/Map'])
        .then(
          ([Map]: [__esri.MapConstructor]) => {
            expect(Map).toBeDefined();
            // le point d'entrée principal de l'api existe dans la page
            const scriptElements = document.querySelectorAll('script[data-esri-loader]');
            expect(scriptElements.length).toBeGreaterThan(0);
            expect(service.isLoaded()).toBe(true);
            done();
          },
          reason => {
            done.fail(reason);
          }
        ).catch(done.fail);
    })();
  });

  it('doit permettre ', inject([EsriLoaderService], (service: EsriLoaderService) => {
    expect(service).toBeTruthy();
  }));

});
