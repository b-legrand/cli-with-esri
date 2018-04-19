import { TestBed, inject } from "@angular/core/testing";

import { LAYERS, LayerTreeNodeService } from "./layer-tree-node.service";
const fakeLayers = [
  {
    uid: "service-s02-gaia-ligne-v2",
    title: "Infrastructures ligne",
    sublayers: [
      {
        uid: "service-s02-gaia-ligne-v2-0000-nl",
        title: "Noeuds Lignes",
        id: "0",
        visible: false,
        minScale: 144447,
        maxScale: 70,
        sublayers: [
          {
            uid: "service-s02-gaia-ligne-v2-0001-ad",
            keyhab: "",
            title: "Anomalie de distance",
            id: "1",
            visible: false,
            minScale: 144447,
            maxScale: 70,
            definitionExpression: "TO_DATE({now},'YYYYMMDD') BETWEEN DDA AND DFA",
          },
        ],
      },
    ],
  },
];
describe("LayerTreeNodeService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayerTreeNodeService, { provide: LAYERS, useValue: fakeLayers }],
    });
  });

  it(
    "should be created",
    inject([LayerTreeNodeService], (service: LayerTreeNodeService) => {
      expect(service).toBeTruthy();
    }),
  );

  it(
    "should return a tree of TreeNode",
    inject([LayerTreeNodeService], (service: LayerTreeNodeService) => {
      service.getLayerNodes().subscribe(data => {
        expect(data).toBeTruthy();
        console.log(data);
      });
    }),
  );
});
