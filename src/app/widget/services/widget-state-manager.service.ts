import { Injectable } from '@angular/core';
import { WidgetState } from '../model/widget-state';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {AppStoreService} from '../../core/services/app-store.service';

/**
 * Service de gestion de l'état des widgets.
 *
 * Permets d'effectuer des traitement de masse sur l'état des widgets de type ihm/socle.
 */
@Injectable()
export class WidgetStateManager {

    private widgets: WidgetState[] = [];

    constructor(private appStore: AppStoreService) {
      this.widgets = appStore.getState().widgets;
    }

    addWidgetState(widgetState) {
      this.widgets.push(widgetState);
    }

    closeAll() {
      this.widgets.forEach(widgetState => {
        widgetState.closed = true;
      });
    }

    getWidgetStates(): Observable<WidgetState[]> {
      return Observable.of(this.widgets);
    }

    getMaxZIndex(): number {
      return Math.max(...this.widgets.map(widget => widget.zIndex));
    }

}

export default WidgetStateManager;
