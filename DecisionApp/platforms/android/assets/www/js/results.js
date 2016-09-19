window.onload = function() {
	document.getElementById("result").innerHTML = parent.document.URL.substring(parent.document.URL.indexOf('?') + 8, parent.document.URL.length);
}