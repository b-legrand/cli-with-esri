import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

/**
 * Composant d'entête d'une application.
 * Les entrées menu sont paramétrables et reprennent l'api de primeng.
 * Les résultats de la recherche peuvent être mis en
 *
 * @see https://github.com/primefaces/primeng/blob/master/src/app/components/common/menuitem.ts
 */
@Component({
  selector: 'sncf-header',
  templateUrl: './sncf-header.component.html',
  styleUrls: ['./sncf-header.component.scss']
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
  @Input() public menuItems: MenuItem[];

  /**
   * Callack de changement du champ recherche.
   * @type {EventEmitter<any>}
   */
  @Output() public search: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {

  }

}
