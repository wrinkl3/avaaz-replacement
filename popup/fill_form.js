/*
Copyright (C) 2017 Alex Shatberashvili

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>
*/
window.addEventListener("load", function(event) {	
	var select = document.getElementsByName("countrylist")[0];
	for(var i = 1; i < countries.length; i++) {
	    var opt = countries[i];
	    var el = document.createElement("option");
	    el.textContent = opt.value;
	    el.value = opt.id;
	    select.appendChild(el);
	}

	document.getElementById('signform').addEventListener('submit', function(evt){
	    evt.preventDefault();
	    var name = document.getElementsByName("namefield")[0].value;
	    var email = document.getElementsByName("emailfield")[0].value;
	    var zip = document.getElementsByName("zipfield")[0].value;
		var country = document.getElementsByName("countrylist")[0].value;    
	    var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
	    gettingActiveTab.then((tabs) => {
	    	browser.tabs.sendMessage(tabs[0].id, {name: name, email: email, zip: zip, country: country});
	    });
	});
});