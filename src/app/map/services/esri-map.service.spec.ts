import { TestBed, inject } from '@angular/core/testing';

import { EsriMapService } from './esri-map.service';

describe('MapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EsriMapService]
    });
  });

  it('should be created', inject([EsriMapService], (service: EsriMapService) => {
    expect(service).toBeTruthy();
  }));
});
