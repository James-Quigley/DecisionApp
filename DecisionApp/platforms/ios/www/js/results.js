var result;
var deviceType;
window.onload = function() {
    
    //Changes Maps link to appropriate OS specifications
	result = parent.document.URL.substring(parent.document.URL.indexOf('?') + 8, parent.document.URL.length);
	document.getElementById("result").innerHTML = result;
	deviceType = (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : "null";
	

	if (deviceType === "iPhone") {
		var mapsLink = "maps:q=" + result;
		document.getElementById("mapsLink").href = mapsLink;
        
        
        document.getElementById("backDiv").innerHTML = "<a href=\"index.html\"><button id=\"backButton\" class=\"btn\">Back</button></a>";
	}
	else {
		var mapsLink = "geo:0,0?q=" + result;
		document.getElementById("mapsLink").href = mapsLink;
	}
    
    //Changes browser link to a google result
    var browserLink = "https://www.google.com/#q=" + result;
    document.getElementById("browserLink").href = browserLink;
    
}