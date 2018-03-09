import {inject, TestBed} from '@angular/core/testing';

import {EsriLoaderService} from './esri-loader.service';
import {APP_CONFIG} from '../../core/model/app.config';

describe('MapService', () => {
  const testAppConfig = {
    appName: 'test',
    apiVersion: '4.6',
    themeColor: 'black',
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

  it('Un appel à loadModules doit ajouter le <script> principal dans le body', done => {
    const esriLoaderService: EsriLoaderService = new EsriLoaderService(testAppConfig);
    esriLoaderService.loadModules(['dojo'])
        .then(
          element => {
            expect(element).toBeDefined();
            // le point d'entrée principal de l'api existe dans la page
            const scriptElements: NodeListOf<HTMLScriptElement> = document.querySelectorAll('script[data-esri-loader]');
            expect(scriptElements.length).toBeGreaterThan(0);
            expect(esriLoaderService.isLoaded()).toBe(true);
            done();
          }
        ).catch(reason => {
        console.error(reason);
        done.fail(reason);
      });
  });

  it('Un appel à loadModules doit ajouter des <scripts> dans le body', done => {
    inject([EsriLoaderService], (service: EsriLoaderService) => {
      service.loadModules(['esri/Map'])
        .then(
          ([Map]: [__esri.MapConstructor]) => {
            console.info(Map);
            expect(Map).toBeDefined();
            // le point d'entrée principal de l'api existe dans la page
            const scriptElements = document.querySelectorAll('script[data-esri-loader]');
            expect(scriptElements.length).toBeGreaterThan(0);
            expect(service.isLoaded()).toBe(true);
            done();
          }
        ).catch(reason => {
          console.error(reason);
          done.fail(reason);
        });
    })();
  });

  it('doit permettre ', inject([EsriLoaderService], (service: EsriLoaderService) => {
    expect(service).toBeTruthy();
  }));

});
