console.log('clicked');

    function cb(data) {
    var businesses = {};
    $("#target").append(data)
    console.log(data);

    $.each(data.businesses, function (i, ob) {
        var key = ob.name;
        businesses[key] = {
            address : ob.location.address[0],
            city : ob.location.display_address,
            rating : ob.rating,
            phone : ob.display_phone,
            
        };
    })

    console.log(businesses);
    $("#target").append(
        $.each(businesses, function (i, ob) {
            document.write(i + "<br>");
            $.each(ob, function (ind, obj) {
                document.write(obj + "<br>");
            });
            document.write("<br>");
        })
    );
}


var auth = {
    //
    // Update with your auth tokens.
    //
    consumerKey: "TfReucDBQ9EObZ5H3pxn1g",
    consumerSecret: "USc7sHzbO8x7hNpdNKihifBqm1Y",
    accessToken: "Gdi_Jm9_Gcj4qn65HQkgijm--BGd1_5u",
    // This example is a proof of concept, for how to use the Yelp v2 API with javascript. You wouldn't actually want to expose your access token secret like this in a real application.
    accessTokenSecret: "ysaheBNLl76bxaxZLrFkPlhGh3I",
    serviceProvider: {
        signatureMethod: "HMAC-SHA1"
    }
};

// Location and Term Variables
// var terms =  queryTerm = $('#term').val().trim();
//     console.log(terms);
// var near =  queryTerm = $('#location').val().trim();
//     console.log(near);

// Location and Term Variables
var terms =  "Pizza"
    console.log(terms);
var near =  "32714";
    console.log(near);

var accessor = {
    consumerSecret: auth.consumerSecret,
    tokenSecret: auth.accessTokenSecret
};

var parameters = [];
parameters.push(['term', terms]);
parameters.push(['location', near]);
parameters.push(['callback', 'near']);
parameters.push(['oauth_consumer_key', auth.consumerKey]);
parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
parameters.push(['oauth_token', auth.accessToken]);
parameters.push(['oauth_signature_method', 'HMAC-SHA1']);
parameters.push(['limit', '10']);
// Active Sort Parameter Distance (1) does not return long & lat data
parameters.push(['sort', '2']);

var message = {
    'action': 'https://api.yelp.com/v2/search',
    'method': 'GET',
    'parameters': parameters
};

OAuth.setTimestampAndNonce(message);
OAuth.SignatureMethod.sign(message, accessor);

var parameterMap = OAuth.getParameterMap(message.parameters);

console.log(message);
console.log(parameterMap);

$.ajax({
    'url': message.action,
    'data': parameterMap,
    'dataType': 'jsonp',
    'jsonpCallback': 'cb',
    'cache': true
}).done(function(data, textStatus, jqXHR) {
    // console.log('success[' + data + '], status[' + textStatus + '], jqXHR[' + JSON.stringify(jqXHR) + ']');
}).fail(function(jqXHR, textStatus, errorThrown) {
    console.log('error[' + errorThrown + '], status[' + textStatus + '], jqXHR[' + JSON.stringify(jqXHR) + ']');
});