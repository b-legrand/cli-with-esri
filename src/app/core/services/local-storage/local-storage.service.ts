import { Injectable } from "@angular/core";

/**
 * Simple service d'emballage du localStorage
 */
@Injectable()
export class LocalStorageService {

  public setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

}
