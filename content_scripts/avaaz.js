function sign_petition(request, sender, sendResponse) {
    data = {
        Email: request.email,
        Name: request.name,
        CountryID: request.country,
        cid: '23654',
        supports_history_api: true,
        secure_validation: Date(),
        used_js: Date()
    }

    jQuery.ajax({
        dataType:'json',
        type: 'post',
        data: data,
        url: '/act/frontend_api/legacy/sign_all.php',
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

data = {
        /*
        Email: request.email,
        Name: request.name,
        CountryID: request.country,
        cid: 23654,
        supports_history_api: true,
        secure_validation: Date(),
        used_js: Date()
         */
        Email: 'namio@gmail.com',
        Name: 'derek',
        CountryID: '20',
        cid: '23654',
        supports_history_api: true,
        secure_validation: Date(),
        used_js: Date()
    }

console.log('nanana')
console.log(data.Name)
$.ajax({
        dataType:'json',
        type: 'post',
        data: data,
        url: 'https://secure.avaaz.org/act/frontend_api/legacy/sign_all.php',
        headers: {'Referer': 'https://secure.avaaz.org/campaign/en/greenpeace_locked/?fpbr'},
        success:function(json) {
            if (json.error_message) {
                console.log('ninini')
                alert(json.error_message);
            } else {
                if (json.redirect_url) {
                    console.log('nunu')
                    window.location.href = json.redirect_url;
                }
            }
        }
});


function postAjax(url, data, success) {
    console.log("trying")
    var params = typeof data == 'string' ? data : Object.keys(data).map(
            function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
        ).join('&');
    console.log('1')
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    console.log('1.5')
    xhr.open('POST', url);
    console.log('2')
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
    };
    console.log('3')
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
    return xhr;
}

// example request
//postAjax('https://secure.avaaz.org/act/frontend_api/legacy/sign_all.php', data, function(data){ console.log(data); });

/*
Assign sign_petition() as a listener for messages from the extension.
*/
//browser.runtime.onMessage.addListener(sign_petition);