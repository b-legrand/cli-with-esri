import { TestBed, inject } from '@angular/core/testing';

import { AppStoreService } from './app-store.service';

describe('AppStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppStoreService]
    });
  });

  it('should be created', inject([AppStoreService], (service: AppStoreService) => {
    expect(service).toBeTruthy();
  }));
});
