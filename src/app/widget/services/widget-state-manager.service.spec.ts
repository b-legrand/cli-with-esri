import { Injectable } from '@angular/core';
import { WidgetState } from '../model/widget-state';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AppStoreService } from '../../core/services/app-store.service';
import { TestBed, inject } from '@angular/core/testing';
import { WidgetStateManager } from './widget-state-manager.service';
import { AppStore, createAppStore } from '../../core/model/app.store';

describe('WidgetStateManager', () => {

    let widgets: WidgetState[] = [];

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          WidgetStateManager,
          AppStoreService,
          { provide: AppStore , useFactory: createAppStore }
        ]
      });
    })

    it('is injectable', () => {
      inject([WidgetStateManager], (widgetStateManager) => {
        expect(widgetStateManager).toBeDefined();
      })();
    });
    it('addWidgetState()', () => {
      inject([WidgetStateManager], (widgetStateManager) => {
        widgetStateManager.addWidgetState();
      })();
    });

    it('closeAll()', () => {
      inject([WidgetStateManager], (widgetStateManager) => {
        widgetStateManager.closeAll();
      })();
      /*
      this.widgx*/
    });

    it('getWidgetStates()', () => {
      /*: Observable<WidgetState[]> {
      return Observable.of(this.widgets);
      */
    });

    it('getMaxZIndex()', () => {
      /*: number {
      return Math.max(...this.widgets.map(widget => widget.zIndex));
    */
     });

});
