var queryURL = "http://food2fork.com/api/search?key=c3efaeda1af2d39309095a618614e527&q=";


$( "#search" ).change(function() {
  // Check input( $( this ).val() ) for validity here

    var value = $("#search").val();
    console.log(value)

    queryURL = queryURL + value;

    console.log(queryURL);

    $.ajax({
        url: queryURL,
         dataType: "json",
        context: document.body
    }).done(function( data ) {
        displaydata(data);
    })
});


//this is where we're going to display the list to the user
function displaydata(x){
    console.log(x);
    var t = JSON.stringify(x);

    $("#recipeAppearHere").html(t);
}
