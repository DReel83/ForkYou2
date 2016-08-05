function displayReceipe()
 	{

 		$('#receipeAppearHere').empty();
        var receipe = $(this).data('name');
        console.log(receipe);
        var queryURL = "http://food2fork.com/api/get?key=c3efaeda1af2d39309095a618614e527&q=";
        console.log(queryURL);
        $.ajax(
        {
                url: queryURL,
                method: 'GET'
        })
            .done(function(response) 
            {

                console.log(response)
    }