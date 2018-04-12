import { AuthGuardService } from "./auth-guard.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { AuthenticationService } from "../services/authentication.service";

describe("AuthGuardService", () => {
  let authService: AuthGuardService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthGuardService,
      ],
    });
    authService = TestBed.get(AuthenticationService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it("can be injected", () => {
    expect(authService).toBeTruthy();
  });
});
