function cb(data) {
    console.log("cb: " + JSON.stringify(data));
}

var auth = {
    //
    // Update with your auth tokens.
    //
    consumerKey: "89KTplD2sUHcoma0V_c3hw",
    consumerSecret: "Pa61ejjSx0kuvX43Qk0oXfDzass",
    accessToken: "apgIH6zwsp7oosiwwx8V30kx6U-CyhtM",
    // This example is a proof of concept, for how to use the Yelp v2 API with javascript. You wouldn't actually want to expose your access token secret like this in a real application.
    accessTokenSecret: "oscPYE9DBJ9zFl5kF95TImyHQrs",
    serviceProvider: {
        signatureMethod: "HMAC-SHA1"
    }
};


// Location and Term Variables
var terms = $('#term').val().trim();
var near = $('#location').val().trim();

var accessor = {
    consumerSecret: auth.consumerSecret,
    tokenSecret: auth.accessTokenSecret
};

var parameters = [];
parameters.push(['term', terms]);
parameters.push(['location', near]);
parameters.push(['callback', 'cb']);
parameters.push(['oauth_consumer_key', auth.consumerKey]);
parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
parameters.push(['oauth_token', auth.accessToken]);
parameters.push(['oauth_signature_method', 'HMAC-SHA1']);

var message = {
    'action': 'https://api.yelp.com/v2/search',
    'method': 'GET',
    'parameters': parameters
};

OAuth.setTimestampAndNonce(message);
OAuth.SignatureMethod.sign(message, accessor);

var parameterMap = OAuth.getParameterMap(message.parameters);

$.ajax({
    'url': message.action,
    'data': parameterMap,
    'dataType': 'jsonp',
    'jsonpCallback': 'cb',
    'cache': true
}).done(function(data, textStatus, jqXHR) {
    console.log('success[' + data + '], status[' + textStatus + '], jqXHR[' + JSON.stringify(jqXHR) + ']');
}).fail(function(jqXHR, textStatus, errorThrown) {
    console.log('error[' + errorThrown + '], status[' + textStatus + '], jqXHR[' + JSON.stringify(jqXHR) + ']');
});





















// var form = new FormData();
// form.append("term", "steak");
// form.append("oauth_consumer_key", "89KTplD2sUHcoma0V_c3hw");
// form.append("oauth_token", "oR_aeSeGZVVnX-1ifSO9qpkj12ENC3fs");
// form.append("oauth_signature_method", "HMAC-SHA1");
// form.append("oauth_timestamp", 1470503186);
// form.append("oauth_nonce", "xmNEmI");
// form.append("oauth_version", "1.0");
// form.append("oauth_signature", "uWVz5m3PeoXy1ABXJ4FG/f5Jceo=");

// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://api.yelp.com/v2/search/?term=steak&location=32714&oauth_consumer_key=89KTplD2sUHcoma0V_c3hw&oauth_token=ztIM2TP0ptyQt_l-FgpmmIclTc5jN3Tf&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1470871600&oauth_nonce=WOSn79&oauth_version=1.0&oauth_signature=ocKfwjxoiJvJd5nMIucUbxm0jFQ%3D",
//   "method": "GET",
//   "headers": {
//     "cache-control": "no-cache",
//     "postman-token": "b3679692-bb0c-ec96-6a7f-5f6dc103555f"
//   },
//   "processData": false,
//   "contentType": false,
//   "mimeType": "multipart/form-data",
//   "data": form
// }

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });

















