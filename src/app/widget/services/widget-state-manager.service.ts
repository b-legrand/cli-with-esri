import { Injectable } from "@angular/core";
import { WidgetState } from "../model/widget-state";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import { AppStoreService } from "../../core/services/app-store/app-store.service";

/**
 * Service de gestion de l'état des widgets.
 *
 * Permets d'effectuer des traitement de masse sur l'état des widgets de type ihm/socle.
 *
 * - fermer tout d'un coup
 * - gérer les listes / ancrables/
 */
@Injectable()
export class WidgetStateManager {
  private widgets: { [id: string]: WidgetState } = {};

  constructor(private appStore: AppStoreService) {
    this.widgets = appStore.getState().widgets;
  }

  addWidgetState(id: string, widgetState: WidgetState) {
    this.widgets[id] = widgetState;
  }

  closeAll() {
    Object.keys(this.widgets).forEach(id => {
      this.widgets[id].closed = true;
    });
  }

  getMaxZIndex(): number {
    const widgets = Object.keys(this.widgets).map(key => this.widgets[key]);
    return Math.max(...widgets.map(widget => widget.zIndex || 0));
  }
}

export default WidgetStateManager;
