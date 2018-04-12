import { AuthenticationService } from "./authentication.service";
import {
  HttpTestingController,
  HttpClientTestingModule,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

describe("AuthenticationService", () => {
  let authService: AuthenticationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthenticationService,
      ],
    });
    authService = TestBed.get(AuthenticationService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it("can be injected", () => {
    expect(authService).toBeTruthy();
  });
});
