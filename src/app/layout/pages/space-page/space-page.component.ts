import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-space-page',
  templateUrl: './space-page.component.html',
  styleUrls: ['./space-page.component.scss']
})
export class SpacePageComponent implements OnInit {

  public spaceId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.spaceId = params.spaceId;
    });
  }

}
