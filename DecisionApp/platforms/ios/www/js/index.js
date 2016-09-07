/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();


document.getElementById("add").onclick = function() {
  var list = document.getElementById('list');
  var newLI = document.createElement('input');
  newLI.type = "text";
  newLI.className = "list-group-item";
  newLI.style = "display:table-cell; width:100%";
  list.appendChild(newLI);
};

document.getElementById("GoButton").addEventListener("click", function(){
<<<<<<< Updated upstream
	var listItems = document.getElementsByClassName("list-group-item");
<<<<<<< HEAD
	var choice = Math.floor(Math.random() * listItems.length);
	
	var text = listItems[choice].value;
=======
=======
	var listItems = document.getElementsByClassName("list-group-item"); //Array of all values of the list
>>>>>>> Stashed changes
	
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
>>>>>>> origin/master
	
	//Outputs result - CHANGE
	alert(text);
});



