window.onload = function() {
	document.getElementById("result").innerHTML = parent.document.URL.substring(parent.document.URL.indexOf('?') + 8, parent.document.URL.length);
}

document.getElementById("maps").onclick = function() {
	if (iOS) {
		window.open('maps://?q=' + geocoords, '_system');
	}
	else {
	  var label = encodeURI('7 East Street'); // encode the label!
	  window.open('geo:0,0?q=' + geocoords + '(' + label + ')', '_system');
	}
}