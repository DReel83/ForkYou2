var queryURL = "http://food2fork.com/api/search?key=c3efaeda1af2d39309095a618614e527&q=";


$( "#recipesearch" ).change(function() {
  // Check input( $( this ).val() ) for validity here
  var value = $("#recipesearch").val();
  console.log(value);

  $.ajax({
      url: queryURL+value,
      type: 'GET',
headers: {"Content-Type":"text/plain; charset=utf-8", "Accept": "*", "Accept-Language":"es-ES,es;q=0.8"},
      contentType: 'application/json',
      crossDomain: true,
      dataType: 'json',
}).done(function(response) 
    {
     console.log(response);
    })
  
});


//this is where we're going to display the list to the user
function displaydata(x){
    console.log(x);
    var t = JSON.stringify(x);

    $("#recipeAppearHere").html(t);
}
