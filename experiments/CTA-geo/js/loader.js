
// hardcode iframe to hold map, place on document body
var frame = document.createElement('iframe');
  frame.frameBorder = 0;
  frame.scrolling="no";
  frame.style.width = '100%';
  frame.style.height = '300px';


frame.onload = function() {
  // new HTML DOCUMENT
  var doc = frame.contentDocument || frame.contentWindow.document;
  var mapstyle = doc.createElement('link');
  mapstyle.rel="stylesheet";
  mapstyle.href="css/marker.css";

  doc.head.appendChild(mapstyle);
  
  
  // new script
    var mapscript = doc.createElement('script');
    mapscript.type="text/plain";
    mapscript.src = "https://cdn.rawgit.com/jerikson/jerikson.github.io/8c9720ec/experiments/CTA-geo/js/map.js";
 
    doc.head.appendChild(mapscript);

  
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
