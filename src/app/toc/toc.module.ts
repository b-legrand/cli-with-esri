// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// primeng
import { TreeModule } from 'primeng/tree';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule} from 'primeng/tooltip';

import { TableOfContentsComponent } from './components/table-of-contents/table-of-contents.component';
import { LayerTreeNodeService } from './services/layer-tree-node.service';
import { FilteredLayerListComponent } from './components/filtered-layer-list/filtered-layer-list.component';
import { HighlightPipe } from './pipes/highlight.pipe';
import {FormsModule} from '@angular/forms';
import {OverlayPanelModule} from 'primeng/primeng';

const TOC_MODULE_COMPONENTS = [
  FilteredLayerListComponent,
  TableOfContentsComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TreeModule,
    OverlayPanelModule,
    TooltipModule,
    InputTextModule,
  ],
  declarations: [
    TableOfContentsComponent,
    FilteredLayerListComponent,
    HighlightPipe,
  ],
  providers: [
    LayerTreeNodeService,
  ],
  exports: [
    TableOfContentsComponent,
  ],
  entryComponents: [
    TableOfContentsComponent,
  ]
})
export class TocModule { }
