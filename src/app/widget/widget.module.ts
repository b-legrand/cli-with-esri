import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AngularDraggableModule } from 'angular2-draggable';
import { ResizableModule } from 'angular-resizable-element';

import { EsriWidgetDirective } from './directives/esri-widget.directive';
import { SocleWidgetDirective } from './directives/socle-widget.directive';
import { WidgetComponent, WidgetHeaderComponent, WidgetPanelComponent, ExpandButtonComponent } from './components';
import { WidgetStateManager } from './services/widget-state-manager.service';
import { CoreModule } from '../core/core.module';
import { TooltipModule } from 'primeng/tooltip';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    AngularDraggableModule,
    ResizableModule,
    TooltipModule,
    ScrollPanelModule,
    //
    CoreModule,
  ],
  declarations: [
    SocleWidgetDirective,
    EsriWidgetDirective,
    WidgetHeaderComponent,
    WidgetComponent,
    WidgetPanelComponent,
    ExpandButtonComponent,
  ],
  exports: [
    WidgetComponent,
    SocleWidgetDirective,
    EsriWidgetDirective,
    ExpandButtonComponent,
  ],
  providers: [
    WidgetStateManager,
  ],
  entryComponents: [
    WidgetComponent,
  ]
})
export class WidgetModule { }
