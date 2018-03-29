import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TableOfContentsComponent } from "./table-of-contents.component";
import { FormsModule } from "@angular/forms";

describe("TableOfContentsComponent", () => {
  let component: TableOfContentsComponent;
  let fixture: ComponentFixture<TableOfContentsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [TableOfContentsComponent],
        imports: [FormsModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOfContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
