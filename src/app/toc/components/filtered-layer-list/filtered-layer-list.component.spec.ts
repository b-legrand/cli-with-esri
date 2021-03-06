import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FilteredLayerListComponent } from "./filtered-layer-list.component";
import { TreeModule } from "primeng/tree";
import { HighlightPipe } from "../../pipes/highlight.pipe";
import { LAYERS, LayerTreeNodeService } from "../../services/layer-tree-node.service";
import { VisibleForScaleDirective } from "../../directives/visible-for-scale.directive";
import { TooltipModule } from "primeng/primeng";
import { SymbologyTooltipComponent } from "../symbology-tooltip/symbology-tooltip.component";

describe("FilteredLayerListComponent", () => {
  let component: FilteredLayerListComponent;
  let fixture: ComponentFixture<FilteredLayerListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FilteredLayerListComponent, HighlightPipe, VisibleForScaleDirective, SymbologyTooltipComponent],
        imports: [TreeModule, TooltipModule],
        providers: [LayerTreeNodeService, { provide: LAYERS, useValue: undefined }],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredLayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
