// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// primeng
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
// internals
import { EsriMapService } from './services/esri-map.service';
import { EsriMapComponent } from './components/esri-map/esri-map.component';
import { WidgetContainerComponent } from './components/widget-container/widget-container.component';
import { AnchorZoneComponent } from './components/anchor-zone/anchor-zone.component';
import { EsriLoaderService } from './services/esri-loader.service';
import { WidgetModule } from '../widget/widget.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SelectButtonModule,
    SliderModule,
    InputTextModule,
    ButtonModule,
    ProgressSpinnerModule,
    WidgetModule,
  ],
  declarations: [
    WidgetContainerComponent,
    EsriMapComponent,
    AnchorZoneComponent,
  ],
  providers: [
    EsriMapService,
    EsriLoaderService,
  ],
  exports: [
    WidgetContainerComponent,
    EsriMapComponent,
    AnchorZoneComponent,
  ]
})
export class MapModule {}
