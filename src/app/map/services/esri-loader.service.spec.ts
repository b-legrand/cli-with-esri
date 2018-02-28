import { TestBed, inject } from '@angular/core/testing';

import { EsriLoaderService } from './esri-loader.service';

describe('MapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EsriLoaderService]
    });
  });

  it('doit être créé', inject([EsriLoaderService], (service: EsriLoaderService) => {
    expect(service).toBeTruthy();
  }));

});
