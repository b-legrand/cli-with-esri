import {Component, Input, OnInit} from '@angular/core';

export enum SidebarSize {
  small = 'sm',
  medium = 'md',
  large = 'lg',
}

export enum SidebarPosition {
  small= 'left',
  medium= 'right',
}
/**
 * composant page / sidebar :
 *
 * Affiche le contenu dans une sidebar primeng : https://www.primefaces.org/primeng/#/sidebar
 *
 *
 */
@Component({
  selector: 'sidebar-page',
  templateUrl: './sidebar-page.component.html',
  styleUrls: ['./sidebar-page.component.scss']
})
export class SidebarPageComponent implements OnInit {

  @Input() public size: SidebarSize;

  @Input() public position: SidebarPosition;

  constructor() { }

  ngOnInit() {
  }

}
