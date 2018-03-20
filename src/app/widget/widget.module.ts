import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularDraggableModule } from 'angular2-draggable';
import { ResizableModule } from 'angular-resizable-element';

import { EsriWidgetDirective } from './directives/esri-widget.directive';
import { WidgetWindowComponent, WidgetHeaderComponent, WidgetPanelComponent, ExpandButtonComponent } from './components';
import { WidgetStateManager } from './services/widget-state-manager.service';
import { CoreModule } from '../core/core.module';
import { TooltipModule } from 'primeng/tooltip';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

/**
 * Module widget, contient les composants nécéssaire à la composition d'un widget 'IHM'.
 */
@NgModule({
  imports: [
    CommonModule,
    AngularDraggableModule,
    ResizableModule,
    TooltipModule,
    PerfectScrollbarModule,
    //
    CoreModule,
  ],
  declarations: [
    EsriWidgetDirective,
    WidgetHeaderComponent,
    WidgetWindowComponent,
    WidgetPanelComponent,
    ExpandButtonComponent,
  ],
  exports: [
    WidgetWindowComponent,
    EsriWidgetDirective,
    ExpandButtonComponent,
  ],
  providers: [
    WidgetStateManager,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: {
        suppressScrollY: true,
        wheelPropagation: true,
      }
    }
  ],
  entryComponents: [
    WidgetWindowComponent,
  ]
})
export class WidgetModule { }
