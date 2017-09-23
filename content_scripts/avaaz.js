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
function sign_petition(request, sender, sendResponse) {
    var data = {
        Email: request.email,
        Name: request.name,
        CountryID: request.country,
        Postcode: request.zip,
        cid: getCID(),
        supports_history_api: true,
        secure_validation: Date(),
        used_js: Date()
    };
    /*
    Parameters for the JSON-type signing.
    */
    var dataType = 'json';
    var url = 'https://secure.avaaz.org/act/frontend_api/legacy/sign_all.php';
    var contentType = 'application/x-www-form-urlencoded; charset=UTF-8';
    var processData = true;
    /*
    Check if the page uses the form-data signing scheme and, if so, adjust the parameters accordingly.
    */
    if (document.getElementById('biogems-petition-form')){
        var formData = new FormData();
        for ( var key in data) {
            formData.append(key, data[key]);
        }
        url = document.getElementById('biogems-petition-form').action;
        data = formData;
        contentType = false;
        processData = false;
    }
    jQuery.ajax({
        dataType:dataType,
        type: 'post',
        data: data,
        url: url,
        contentType: contentType,
        processData: processData,
        success:function(json) {
            if (json.error_message) {
                alert(json.error_message);
            } else {
                if (json.redirect_url) {
                    window.location.href = json.redirect_url;
                }
            }
        }
    });
    browser.runtime.onMessage.removeListener(sign_petition);
}

/*
Extract the campaign id from the page's HTML.
*/
function getCID(){
    var markup = document.documentElement.innerHTML;
    var i = markup.indexOf('cid');
    var j = i+markup.substring(i).indexOf(',');
    var cid = markup.substring(i+5,j);
    return cid;
}

/*
Assign sign_petition() as a listener for messages from the extension.
*/
browser.runtime.onMessage.addListener(sign_petition);