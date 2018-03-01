import { Injectable } from '@angular/core';
import { WidgetState } from '../model/widget-state';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

/**
 * Service de gestion de l'état des widgets.
 *
 * Permets d'effectuer des traitement de masse sur l'état des widgets de type ihm/socle.
 */
@Injectable()
export class WidgetStateManager {

    private widgets: WidgetState[] = [];

    constructor() {
      this.widgets = [];
    }

    addWidgetState(widgetState) {
      this.widgets.push(widgetState);
    }

    updateState(widgetId, key, value: boolean) {
    }

    getWidgetStates() {
      return Observable.of(this.widgets);
    }

    getMaxZIndex() {
      return Math.max(...this.widgets.map(widget => widget.zIndex));
    }

}

export default WidgetStateManager;
