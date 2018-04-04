import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LayerListComponent } from "./layer-list.component";
import { FormsModule } from "@angular/forms";
import { FilteredLayerListComponent } from "../filtered-layer-list/filtered-layer-list.component";
import { VisibleForScaleDirective } from "../../directives/visible-for-scale.directive";
import { HighlightPipe } from "../../pipes/highlight.pipe";
import { TooltipModule } from "primeng/tooltip";
import { InputTextModule } from "primeng/inputtext";
import { TreeModule } from "primeng/tree";

describe("LayerListComponent", () => {
  let component: LayerListComponent;
  let fixture: ComponentFixture<LayerListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          LayerListComponent,
          FilteredLayerListComponent,
          VisibleForScaleDirective,
          HighlightPipe,
        ],
        imports: [
          FormsModule,
          TooltipModule,
          InputTextModule,
          TreeModule,
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
