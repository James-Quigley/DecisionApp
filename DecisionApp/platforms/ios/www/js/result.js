var result;
var deviceType;
window.onload = function() {
    
    //Changes Maps link to appropriate OS specifications
	result = parent.document.URL.substring(parent.document.URL.indexOf('?') + 8, parent.document.URL.length);
	document.getElementById("result").innerHTML = result.replace(/%20/g, " ");
	deviceType = (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : "null";
	

	if (deviceType === "iPhone") {
		var mapsLink = "maps:q=" + result;
		document.getElementById("mapsLink").href = mapsLink;
	}
	if else (deviceType === "Android") {
		var mapsLink = "geo:0,0?q=" + result;
		document.getElementById("mapsLink").href = mapsLink;
        
        //Removes back button
        document.getElementById("backDiv").innerHTML = "";
	}
    
    //Changes browser link to a google result
    var browserLink = "https://www.google.com/#q=" + result;
    document.getElementById("browserLink").href = browserLink;
    
}