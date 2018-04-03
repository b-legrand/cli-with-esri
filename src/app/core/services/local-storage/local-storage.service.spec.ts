import { inject, TestBed } from "@angular/core/testing";
import { LocalStorageService } from "./local-storage.service";

describe("LocalStorageService", () => {
  const valueKey = "storage-key";

  const valueObject: any = {
    attribute: 42,
  };
  let localStorage: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService],
    });
    localStorage = TestBed.get(LocalStorageService);
  });

  beforeEach(() => {
    // nettoier
    localStorage.removeItem(valueKey);
  });

  it(
    "peut être injecté",
    inject([LocalStorageService], (service: LocalStorageService) => {
      expect(service).toBeTruthy();
    }),
  );

  it(
    "fournit la fonction setItem()",

    inject([LocalStorageService], (service: LocalStorageService) => {
      service.setItem(valueKey, valueObject);

      const storedObject = service.getItem(valueKey);
      // verifie
      expect(storedObject).toEqual(valueObject);
    }),
  );

  it(
    "fournit la fonction getItem()",

    inject([LocalStorageService], (service: LocalStorageService) => {
      expect(service.getItem(valueKey)).toBe(null);

      service.setItem(valueKey, valueObject);

      expect(service.getItem(valueKey)).toEqual(valueObject);
    }),
  );
});
