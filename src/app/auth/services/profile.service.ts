import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { InformationUtilisateur } from "../models";
import { SingleResultResponse } from "../models/response.vo";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";

/**
 * Service chargé de faire la requète à l'identification PMSIG.
 *
 */
@Injectable()
export class ProfileService {
  constructor(private http: HttpClient) {}

  public getInformationsUtilisateur(
    codePortail: string,
    idUtilisateur: string,
  ): Observable<InformationUtilisateur> {
    const url = `/transverse/sig_socle/v1/portail/${codePortail}/utilisateur/${idUtilisateur}`;
    return this.http
      .post<SingleResultResponse<InformationUtilisateur>>(url, {})
      .map(value => value.resultat);
  }
}
