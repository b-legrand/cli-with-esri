import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sncf-header',
  templateUrl: './sncf-header.component.html',
  styleUrls: ['./sncf-header.component.scss']
})
export class SncfHeaderComponent implements OnInit {

  @Input() public title: string;

  constructor() { }

  ngOnInit() {
    
  }

}
