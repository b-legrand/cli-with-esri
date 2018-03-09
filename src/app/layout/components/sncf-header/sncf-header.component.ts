import { Component, OnInit, Input } from '@angular/core';
import {Menu} from 'primeng/menu';

@Component({
  selector: 'sncf-header',
  templateUrl: './sncf-header.component.html',
  styleUrls: ['./sncf-header.component.scss']
})
export class SncfHeaderComponent implements OnInit {

  @Input() public title: string;

  @Input() public menuModel: Menu ;

  constructor() { }

  ngOnInit() {

  }

}
