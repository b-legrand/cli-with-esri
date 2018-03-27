import { TestBed, inject } from '@angular/core/testing';

import { LayerTreeNodeService } from './layer-tree-node.service';

describe('LayerTreeNodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayerTreeNodeService]
    });
  });

  it('should be created', inject([LayerTreeNodeService], (service: LayerTreeNodeService) => {
    expect(service).toBeTruthy();
  }));
});
