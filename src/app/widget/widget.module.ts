import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AngularDraggableModule } from 'angular2-draggable';
import { ResizableModule } from 'angular-resizable-element';

import { EsriWidgetDirective } from './directives/esri-widget.directive';
import { WidgetComponent } from './components/widget/widget.component';
import { WidgetHeaderComponent } from './components/widget-header/widget-header.component';
import { WidgetPanelComponent } from './components/widget-panel/widget-panel.component';
import { ExpandButtonComponent } from './components/expand-button/expand-button.component';
import { WidgetStateManager } from './services/widget-state-manager.service';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    AngularDraggableModule,
    ResizableModule,
  ],
  declarations: [
    EsriWidgetDirective,
    WidgetHeaderComponent,
    WidgetComponent,
    WidgetPanelComponent,
    ExpandButtonComponent,
  ],
  exports: [
    WidgetComponent,
    EsriWidgetDirective,
    ExpandButtonComponent,
  ],
  providers: [
    WidgetStateManager,
  ],
})
export class WidgetModule { }
