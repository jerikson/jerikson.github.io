
// hardcode iframe to hold map, place on document body
var frame = document.createElement('iframe');
  frame.frameBorder = 0;
  frame.scrolling="no";
  frame.style.width = '100%';
  frame.style.height = '300px';


frame.onload = function() {
  // new HTML DOCUMENT
  var doc = frame.contentDocument || frame.contentWindow.document;
  var mapscript = doc.createElement('link');
  mapscript.rel="stylesheet";
  mapscript.href="css/marker.css";

  doc.head.appendChild(mapscript);

  ['js/mapbox-gl.js', 'js/map.js'].forEach(function(src) {
    var s = doc.createElement('script');
    s.src = src; s.async = false; // defer/async to load framework before map.js
    s.type="text/javascript";
    doc.head.appendChild(s);
  });


  // hardcode new div to hold map, placed inside the iframe
  var div = doc.createElement('div');
  div.id='map';
  div.style.width = '100%';
  div.style.height = '100%';

  doc.body.appendChild(div)
}

// find <div class="row"> append the frame
var row = document.getElementById('maprow');
row.appendChild(frame);
