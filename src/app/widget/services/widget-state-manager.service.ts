import { Injectable } from '@angular/core';
import { WidgetState } from '../model/widget-state';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class WidgetStateManager {

    private state: { widgets: WidgetState[] };

    constructor() {
        this.state = {
            widgets: []
        };
    }

    setState(widgetId, key, value: boolean) {

    }

    getWidgets() {
      return Observable.of(this.state.widgets);
    }
}

export default WidgetStateManager;
