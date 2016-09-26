document.getElementById("add").onclick = function() {
    var list = document.getElementById('list');
    var newLI = document.createElement('input');
    newLI.type = "text";
    newLI.className = "list-group-item";
    newLI.style.cssText = "display:table-cell; width:100%";
    $(newLI)
        .hide()
        .css('opacity',0.0)
        .appendTo('#' + "list")
        .slideDown('slow')
        .animate({opacity: 1.0});
    newLI.focus();
};

document.getElementById("GoButton").addEventListener("click", function(){
	var listItems = document.getElementsByClassName("list-group-item"); //Array of all values of the list
	
	var listItemsFinal = []; //Contains only non-empty items
	
	//Fills 'listItemsFinal' with non-empty items
	for(var i = 0; i < listItems.length; i++){
		if(listItems[i].value != "" && listItems[i].value != null){
			listItemsFinal.push(listItems[i]);
		}else{
			listItems[i].parentNode.removeChild(listItems[i]);
		}
	}
	
	//Chooses an item at random
	var choice = Math.floor(Math.random() * listItemsFinal.length);
	var text = listItemsFinal[choice].value;
	
	//Outputs result - CHANGE
	//alert(text);
    window.location = "result.html?result=" + text;
});