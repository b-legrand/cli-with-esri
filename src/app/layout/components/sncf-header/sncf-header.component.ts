import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { MenuItem } from "primeng/api";

/**
 * Composant d'entête d'une application.
 * Les entrées menu sont paramétrables et reprennent l'api de primeng.
 *
 * @see https://github.com/primefaces/primeng/blob/master/src/app/components/common/menuitem.ts
 */
@Component({
  selector: "sncf-header",
  templateUrl: "./sncf-header.component.html",
  styleUrls: ["./sncf-header.component.scss"],
})
export class SncfHeaderComponent implements OnInit {

  /**
   * Nom de l'application
   */
  @Input() public title: string;

  /**
   * Si vrai, on affiche le logo.
   */
  @Input() public logo: boolean;

  /**
   * Menu paramétrable.
   */
  @Input() public items: MenuItem[];

  /**
   * Callback de changement du champ recherche.
   */
  @Output() public search: EventEmitter<any> = new EventEmitter<any>();

  public layout: string;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Handset,
    ]).subscribe(result => {
      if (result.matches) {
        this.layout = "handset";
      }
    });
    breakpointObserver.observe([
      Breakpoints.Tablet,
    ]).subscribe(result => {
      if (result.matches) {
        this.layout = "tablet";
      }
    });
    breakpointObserver.observe([
      Breakpoints.Web,
    ]).subscribe(result => {
      if (result.matches) {
        this.layout = "web";
      }
    });
  }

  ngOnInit() {
    // items par défaut de la maquette. chaque appli doit surcharger son menu.
    if (!this.items) {
      this.items = [
        {
          label: "Carte",
          routerLink: ["/", { outlets: { sidebar: null } }],
        },
        {
          label: "Kitchen Sink",
          routerLink: ["/kitchen-sink"],
        },
        {
          label: "Espace #1",
          routerLink: ["/space/1"],
        },
        {
          label: "Espace #2",
          routerLink: ["/space/2"],
        },
      ];
    }
  }

}
