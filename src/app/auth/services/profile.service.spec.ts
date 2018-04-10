import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { ProfileService } from "./profile.service";
import { TestBed } from "@angular/core/testing";

describe("ProfileService", () => {
  const fakeResponse = {
    resultat: {
      login: "profilfull",
      mail: undefined,
      nom: "Test",
      prenom: "Profil Full",
      profils: ["GAIASCOPE-Consultant"],
      typeConnexion: "SUMATRA",
    },
  };
  let httpMock: HttpTestingController;
  let service: ProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProfileService],
    });
    service = TestBed.get(ProfileService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  describe("getInformationsUtilisateur", () => {
    it("requête les informations utilisateur", () => {
      const codePortail = "GAI";
      const idUtilisateur = "profilfull";

      service
        .getInformationsUtilisateur(codePortail, idUtilisateur)
        .subscribe(data => {
          expect(data).toBeTruthy();
        });

      const req = httpMock.expectOne(
        `/v1/portail/${codePortail}/utilisateur/${idUtilisateur}`,
      );
      expect(req.request.method).toBe("POST");
      req.flush(fakeResponse);
    });
  });
});
