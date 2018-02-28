import { EsriWidgetDirective } from './esri-widget.directive';
import { TestBed } from '@angular/core/testing';
import { ElementRef, Component } from '@angular/core';
import { EsriMapService } from '../../map/services/esri-map.service';

// 
class MockElementRef extends ElementRef{

}
describe('EsriWidgetDirective', () => {
  beforeEach(()=> {

    TestBed.configureTestingModule({
      providers: [
        //more providers
        { provide: ElementRef, useClass: MockElementRef },
        EsriMapService,
      ]
    }).compileComponents();
  });
  it('should create an instance', () => {
    // const directive = new EsriWidgetDirective();
    // expect(directive).toBeTruthy();
  });
});
