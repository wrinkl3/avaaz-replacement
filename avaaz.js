//var bod = document.documentElement.innerHTML;
//console.log("aaa");
//console.log(bod);


var signup_button_text = "<div class=\"margin-top-7 buttonwrapper new_version\"><button id=\"sign-pettition-button\" class=\"sign-pettition-button medium form-submit\" type=\"submit\" td_class=\"button_td\" td_text_position=\"1\"><table cellpadding=\"0\" cellspacing=\"0\"><tr><td class=\"button_td1\">Send<\/td><td class=\"button_td2\"><\/td><\/tr><\/table><\/button><\/div>";


$(document).ready(function()
{
    if (typeof jQuery.fn.toggleVal == 'function') {
        $('.form-text').toggleVal();
    }

    // onrollover link for #focus-photo-feature
    $("#focus-photo-feature .content a").hover(
        function () {
            $(this).find('img').attr('src', function() {
                return this.src.replace('.png', '_ovr.png');
            });
        },
        function () {
            $(this).find('img').attr('src', function() {
                return this.src.replace('_ovr', '');
            });
        }
    );
});


$(document).ready(function(){
    if ('function' === typeof $('label').inFieldLabels) {
        $("label.labeloverlay").inFieldLabels();
    }

    $('form').each(function(){
        var input_js = document.createElement('input');
            input_js.setAttribute('type', 'hidden');
            input_js.setAttribute('name', 'secure_validation');
            input_js.value = new Date();
        this.appendChild(input_js);
        var used_js = document.createElement('input');
            used_js.setAttribute('type', 'hidden');
            used_js.setAttribute('name', 'used_js');
            used_js.value = new Date();
        this.appendChild(used_js);
    });

    if (typeof signup_button_text != "undefined") {
        $oSignupPlaceholder = $('.form-sign .form-broken-js');
        replacePlaceholderWith($oSignupPlaceholder, signup_button_text);
    }

    if (typeof donate_button_text != "undefined") {
        $oDonatePlaceholder = $('.form-donate .form-broken-js');
        replacePlaceholderWith($oDonatePlaceholder, donate_button_text);
    }

});

function replacePlaceholderWith(oPlaceholder, mData) {

    if (typeof mData == 'object') {
        for (i = 0; i < mData.length; ++i) {
            $(oPlaceholder[i]).replaceWith(mData[i]);
        }
    } else {
        oPlaceholder.replaceWith(mData)
    }

}