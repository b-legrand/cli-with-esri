import { MapAware } from "../../map/interfaces/map-aware";

class MapAwareComponent implements MapAware{
    onMapLoaded(map: __esri.Map, view: __esri.MapView){
        
    }
}
describe('MapAware', () => {

    it('can be injected with __esri.Map', () => {

    });

});