/**
 * Principe : expose les méthodes de l'api Console, avec plus de contrôle sur le niveau de log.
 */
import { Injectable } from "@angular/core";

@Injectable()
export class Logger {
  private console: Console;

  constructor() {}
}
