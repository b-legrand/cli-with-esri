import { Injectable } from '@angular/core';
import { WidgetState } from '../model/widget-state';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {AppStoreService} from '../../core/services/app-store.service';
import { TestBed, inject } from '@angular/core/testing';
import { WidgetConfigManager } from './widget-config-manager.service';
import { AppStore, createAppStore } from '../../core/model/app.store';

describe('WidgetConfigManager', () => {

    let widgets: WidgetState[] = [];

    let stateManager: WidgetConfigManager;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          WidgetConfigManager
        ]
      });
    })

    it('can be injected', () => {
      inject([WidgetConfigManager], (WidgetConfigManager) => {
        expect(WidgetConfigManager).toBeDefined();
      })();
    });

});

export default WidgetConfigManager;
