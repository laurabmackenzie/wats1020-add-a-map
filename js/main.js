$(document).ready(function() {
  
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top 
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
  var osm = new L.tileLayer(osmUrl, {
    minZoom: 8,
    maxZoom: 18,
    attribution: osmAttrib
  });
  
  
  var satUrl = 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png';
  var satAttrib = 'Map data @ <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a>| Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a><img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">';

  var satLayer = MQ.satelliteLayer();
  /*var satLayer = new L.tileLayer( satUrl, {
    minZoom: 8,
    maxZoom: 18,
    attribution: satAttrib,
    subdomains: ['otile1','otile2','otile3','otile4']
 });*/
 

  var drawUrl = 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png';
  var drawAttrib = '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">';
  var drawLayer = MQ.mapLayer(); /*L.tileLayer( drawUrl, {
    minZoom: 8,
    maxZoom: 18,
    attribution: drawAttrib,
    subdomains: ['otile1','otile2','otile3','otile4']    
  });*/
  

  var mapLayers = {
    "Satellite": satLayer,
    "Map View": drawLayer,
    "Open Street Maps": osm
  }
  

  var map = L.map('map-container').setView([46.852, -121.760], 13);
  L.control.layers(mapLayers).addTo(map);
  drawLayer.addTo(map);
  

  var marker = L.marker([46.852, -121.760]).addTo(map);
  marker.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.");


});


/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/

// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.

// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:


// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)