// angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
// primeng
import { TreeModule } from "primeng/tree";
import { InputTextModule } from "primeng/inputtext";
import { TooltipModule } from "primeng/tooltip";
import { OverlayModule } from "@angular/cdk/overlay";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";

import { LAYERS, LayerTreeNodeService } from "./services/layer-tree-node.service";
import { LayerListComponent } from "./components/layer-list/layer-list.component";
import { FilteredLayerListComponent } from "./components/filtered-layer-list/filtered-layer-list.component";
import { HighlightPipe } from "./pipes/highlight.pipe";
import { SymbologyTooltipComponent } from "./components/symbology-tooltip/symbology-tooltip.component";
import { VisibleForScaleDirective } from "./directives/visible-for-scale.directive";
import { STUB_LAYERS } from "./models/layers.mock";

@NgModule({
  declarations: [
    LayerListComponent,
    FilteredLayerListComponent,
    HighlightPipe,
    VisibleForScaleDirective,
    SymbologyTooltipComponent,
  ],
  entryComponents: [LayerListComponent, SymbologyTooltipComponent],
  exports: [LayerListComponent],
  imports: [
    CommonModule,
    FormsModule,
    TreeModule,
    TooltipModule,
    InputTextModule,
    OverlayModule,
    PerfectScrollbarModule,
  ],
  providers: [LayerTreeNodeService, { provide: LAYERS, useValue: STUB_LAYERS }],
})
export class TocModule {}
