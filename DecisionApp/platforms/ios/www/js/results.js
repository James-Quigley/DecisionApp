var result;
var deviceType;
window.onload = function() {
	result = parent.document.URL.substring(parent.document.URL.indexOf('?') + 8, parent.document.URL.length);
	document.getElementById("result").innerHTML = result;
	deviceType = (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : "null";
	if (deviceType === "iPhone") {
		var mapsLink = "maps:q=" + result;
		document.getElementById("mapsLink").href = mapsLink;
	}
	else {
		window.open('geo:0,0?q=' + result);
	}
}

document.getElementById("maps").onclick = function() {
	
}