import { Component, OnInit } from "@angular/core";

/**
 * Composant routé home page.
 * Page d'atterrissage, par exemple si l'utilisateur n'a pas les droits pour la carte.
 * Doit pouvoir service à remonter des alertes / warning.
 */
@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
