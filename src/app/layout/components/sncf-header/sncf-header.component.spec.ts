import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SncfHeaderComponent } from "./sncf-header.component";
import { Router, Routes } from "@angular/router";
import { MenuModule } from "primeng/menu";
import { MenuItem } from "primeng/api";
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { Location } from "@angular/common";
import { LayoutModule as CdkLayoutModule } from "@angular/cdk/layout";

@Component({ template: "<div>fake home </div>" })
class TestHomeComponent {
}

export const fakeRoutes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: TestHomeComponent },
];
describe("SncfHeaderComponent", () => {
  let component: SncfHeaderComponent;
  let fixture: ComponentFixture<SncfHeaderComponent>;
  let debugElement: DebugElement;
  let router: Router;
  let location: Location;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(fakeRoutes), MenuModule, CdkLayoutModule],
        declarations: [TestHomeComponent, SncfHeaderComponent],
      }).compileComponents();
      router = TestBed.get(Router);
      location = TestBed.get(Location);

      fixture = TestBed.createComponent(SncfHeaderComponent);
      router.initialNavigation();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SncfHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it("peut être créé sans entrées renseignées", () => {
    expect(component).toBeTruthy();
  });

  it("l'affichage du logo est conditionné au paramètre logo", () => {
    expect(component).toBeTruthy();

    component.logo = false;
    fixture.detectChanges();

    expect(debugElement.query(By.css("img"))).toBeNull();

    component.logo = true;
    fixture.detectChanges();

    expect(debugElement.query(By.css("img"))).toBeDefined();
  });

  it("il est possible de passer les entrées menu en paramètre à l'entête", () => {
    const items: MenuItem[] = [
      { label: "Carte", routerLink: ["/", { outlets: { sidebar: null } }] },
      { label: "Kitchen Sink", routerLink: ["/kitchen-sink"] },
      { label: "Espace #1", routerLink: ["/space/1"] },
      { label: "Espace #2", routerLink: ["/space/2"] },
    ];
    component.logo = true;
    component.title = "Gaiascope";
    component.items = items;

    fixture.detectChanges();

    expect(debugElement.nativeElement).toBeDefined();
  });

  it("il est possible de passer les entrées menu en paramètre à l'entête", () => {
    const items: MenuItem[] = [
      {
        label: "Update",
        icon: "fa-refresh",
        command: () => {
          console.log("YO");
        },
      },
      {
        label: "Delete",
        icon: "fa-close",
        command: () => {
          console.log("DELETE");
        },
      },
      { label: "Angular.io", icon: "fa-link", url: "http://angular.io" },
      { label: "Theming", icon: "fa-paint-brush", routerLink: ["/theming"] },
    ];
    component.logo = true;
    component.title = "NOPANIC";
    component.items = items;

    fixture.detectChanges();

    const menu = debugElement.query(By.css("ul"));
    // expect(menu.queryAll(By.css("li"))).toBe(4 + 2);
  });
});
