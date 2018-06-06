import { ViewChild, ElementRef } from "@angular/core";

export abstract class EsriWidgetComponent {
  @ViewChild("widgetContent") protected content: ElementRef;

  protected esriClass: string;

  constructor() {}

  initialize() {}
}
