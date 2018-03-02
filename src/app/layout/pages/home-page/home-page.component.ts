import { Component, OnInit } from '@angular/core';

/**
 * Composant routé home page, lié à /
 *
 * Doit pouvoir service à remonter des alertes / warning.
 */
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
