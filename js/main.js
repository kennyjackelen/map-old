var map;
var markers = [];
var paths = [];
var gm = google.maps;

function initialize() {
	
	var myOptions = {
		zoom: 4,
		center: new gm.LatLng(39, -92),
		mapTypeId: gm.MapTypeId.ROADMAP
	};

	map = new gm.Map(document.getElementById("map_canvas"),
		myOptions);
		
	placeMarkers();
	showMarkers();
		
	drawPaths();
	showPaths();
}

function placeMarkers(){
	
	for(var city in cities)
	{
		var marker = new gm.Marker({
			position: new gm.LatLng(cities[city].lat, cities[city].lng),
			title: cities[city].town
		});
		markers.push(marker);
	}
}

function showMarkers(){
	var i;
	if (markers) {
		for (i in markers) {
			markers[i].setMap(map);
		}
	}
}

function hideMarkers(){
	var i;
	if (markers) {
		for (i in markers) {
			markers[i].setMap(null);
		}
	}
}

function drawPaths()
{
	if (flights) {
		for(var flight in flights)
		{
			drawPath(flights[flight].origin, flights[flight].destination, flights[flight].count);
		}
	}
}

function drawPath(originIATA, destinationIATA, weight){
	var coordinates = [
		iata[originIATA],
		iata[destinationIATA]
	];
	var flightPath = new gm.Polyline({
		path: coordinates,
		strokeColor: "#0000FF",
		strokeOpacity: 1.0,
		strokeWeight: weight
	});
	paths.push(flightPath);
}

function showPaths(){
	var i;
	if (paths) {
		for (i in paths) {
			paths[i].setMap(map);
		}
	}
}

function hidePaths(){
	var i;
	if (paths) {
		for (i in paths) {
			paths[i].setMap(null);
		}
	}
}
