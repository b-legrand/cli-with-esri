import { Injectable } from '@angular/core';
import { AppState } from '../model/app.state';

export const APP_STORE_KEY = 'socle-state';

@Injectable()
export class AppStoreService {

  private state: any;

  private initialState(): AppState {
    this.state = {
      widgets: {},
      mapState: {
        viewProps: {
          zoom: 6,
          center: [2.2137, 46.2276]
        }
      }
    };
    return this.state;
  }

  constructor() {
    // debugger;
    this.restore();
    window.onbeforeunload = (event) => {
      console.dir('SAVE STATE:', this.state);
      this.save();
      // event.preventDefault();
      // event.stopImmediatePropagation();
    };
  }

  getState() {
    return this.state;
  }

  update(state) {
    console.log('UPDATE STATE ', state);
    Object.assign(this.state, state);
  }

  save() {
    window.localStorage.setItem(
      APP_STORE_KEY,
      JSON.stringify(this.state)
    );
  }

  restore() {
    const localState = JSON.parse(
      window.localStorage.getItem(APP_STORE_KEY)
    );
    console.info('LOCAL STORAGE STATE', localState);
    if (!localState || localState === 'null') {
      this.state = this.initialState();
    } else {
      this.state = localState;
    }
  }

  destroy() {
    this.state = undefined;
  }
}
