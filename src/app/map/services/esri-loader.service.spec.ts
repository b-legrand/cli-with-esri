import { inject, TestBed } from "@angular/core/testing";
import "core-js/es6/promise";
import { EsriLoaderService } from "./esri-loader.service";
import { APP_CONFIG } from "../../core/models/app.config";
if (window["jest"]) {
  jest.setTimeout(30000);
}
describe("EsriLoaderService", () => {
  const testAppConfig = {
    appName: "test",
    apiVersion: "4.6",
    themeColor: "black",
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EsriLoaderService,
        {
          provide: APP_CONFIG,
          useValue: testAppConfig,
        },
      ],
    });
  });

  afterEach(() => {
    // Nettoie les scripts ajoutés par esri-loader entre chaque test
    const scriptElements = Array.from(document.querySelectorAll('script[src^="https://js.arcgis.com]'));
    for (const script of scriptElements) {
      document.head.removeChild(script);
      document.body.removeChild(script);
    }
  });

  it(`Un appel à loadScript doit charger l'api arcgis via une balise script dans le body`, done => {
    const esriLoaderService: EsriLoaderService = new EsriLoaderService(testAppConfig);
    esriLoaderService
      .loadScript()
      .then(element => {
        // le require() de dojo est présent dans global
        expect(window["require"]).toBeDefined();
        // esri-loader nous renvoie la balise script.
        expect(element).toBeDefined();
        expect(element.src).toBe(`https://js.arcgis.com/${testAppConfig.apiVersion}/`);
        expect(element.dataset.esriLoader).toBe("loaded");
        // le point d'entrée principal de l'api existe dans la page
        const scriptElements: NodeListOf<HTMLScriptElement> = document.querySelectorAll("script[data-esri-loader]");
        expect(scriptElements.length).toBeGreaterThan(0);
        done();
      })
      .catch(reason => {
        done.fail(reason);
      });
  });

  it("Un appel à loadModules(['esri/Map']) doit charger la classe Map d'esri", done => {
    inject([EsriLoaderService], (service: EsriLoaderService) => {
      service
        .loadModules(["esri/Map"])
        .then(([Map]: [__esri.MapConstructor]) => {
          // on peut construire un objet  'esri/Map':
          expect(Map.constructor).toBeDefined();
          // le point d'entrée principal de l'api existe dans la page
          const scriptElements = document.querySelectorAll("script[data-esri-loader]");
          expect(scriptElements.length).toBeGreaterThan(0);
          done();
        })
        .catch(reason => {
          done.fail(reason);
        });
    })();
  });
});
