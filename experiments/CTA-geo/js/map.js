mapboxgl.accessToken = 'pk.eyJ1IjoiamltbXllcmlrc29uIiwiYSI6ImNpejVsZ25pODAwNGMyd3BnazFuaW9oanEifQ.d-YFOn-6nzudr8q71UZu2Q';
// new div to hold icon representing user location
var el = document.createElement('div');

var startLocation = [12.000352, 57.683341];

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/jimmyerikson/cizewlzjc009w2so1qwwzn5g4',
  center: startLocation, zoom: 4, pitch:20,
  trackResize: true, scrollZoom: false, boxZoom: false, doubleClickZoom: false,
});

map.dragPan.disable()

map.on('load', function() {
rotateBy(1);
  // extrude 3d from map
  map.addLayer({
    'id': '3d-buildings',
    'source': 'composite',
    'source-layer': 'building',
    'filter': ['==', 'extrude', 'true'],
    'type': 'fill-extrusion',
    'minzoom': 6,
    'paint': {
      'fill-extrusion-color': '#aaa',
      'fill-extrusion-height': {
        'type': 'identity',
        'property': 'height'
      },

      'fill-extrusion-base': {
        'type': 'identity',
        'property': 'min_height'
      },
      'fill-extrusion-opacity': .5,
      'fill-extrusion-height': 5,
    }});


});

// make sure map size keeps up with window
function setWindowSize() {
  var width = (window.innerWidth - 6) / 2;
  el.style.with="width", width + "px";
}

  // invalidateSize()

var button = parent.document.getElementById('btn-locate');
button.onclick = function(){

  // use HTML5 geo to find user location
  navigator.geolocation.getCurrentPosition(function(position) {

    var usrLocation = [position.coords.longitude, position.coords.latitude];
    // create marker of element to display on user position
    new mapboxgl.Marker(el).setLngLat(usrLocation).addTo(map);

      // move camera to marker location
      map.flyTo({ center: usrLocation, bearing:-180, zoom: 16, pitch: 60});
      el.id = "marker";
  });

};




map.on('moveend', function(data){
      rotateBy(map.getBearing());
      setWindowSize();
});

function rotateBy(current) {
  var rotateNumber = current;
  map.rotateTo(rotateNumber + 90, {duration: 8000, easing: function(t) {return t;}});
}
