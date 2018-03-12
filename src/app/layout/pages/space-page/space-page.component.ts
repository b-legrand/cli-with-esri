import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Page d'un espace, prends la largeur de l'écran + paramètres de route.
 */
@Component({
  selector: 'app-space-page',
  templateUrl: './space-page.component.html',
  styleUrls: ['./space-page.component.scss']
})
export class SpacePageComponent implements OnInit {

  /**
   * Identifiant d'un espace, à relier à SIGADM.
   */
  public spaceId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.spaceId = params.spaceId;
    });
  }

}
