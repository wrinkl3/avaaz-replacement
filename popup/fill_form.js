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