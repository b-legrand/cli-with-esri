import { Injectable } from "@angular/core";

/**
 * Service chargé de fournir les données legende au tooltip
 */
@Injectable({
  providedIn: "root",
})
export class LegendService {
  private legendLayerMap: { [key: string]: any };
  constructor() {}
}
