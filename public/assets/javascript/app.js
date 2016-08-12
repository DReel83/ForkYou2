function displayRecipe()
 	{

 		$('#recipeAppearHere').empty();
        var recipe = $(this).data('name');
        console.log(recipe);
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
            })
    };