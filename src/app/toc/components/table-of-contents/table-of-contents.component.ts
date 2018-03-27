import { Component, OnInit } from '@angular/core';

/**
 * composant s
 */
@Component({
  selector: 'table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.scss']
})
export class TableOfContentsComponent implements OnInit {

  /**
   * texte saisi par l'utilisateur pour filtrer les couches.
   */
  public filterText: string;

  constructor() { }

  ngOnInit() {
  }

  handleFilterChange($event) {
    this.filterText = $event.target.value;
  }
}
