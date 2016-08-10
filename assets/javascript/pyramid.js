$( document ).ready(function() {

  $('#addItems').css('height', 200)

//Add ingredients when clicking on Image//
var addItemCount = 0;

  function addtocart(ingredient) {
      // Get the "value" from the image selected

    value = ingredient;

    console.log(value)

    // Create a new todo <p> tag in jquery  to hold a todoitem and give it a unique identifier based on what number it is in the list. 
      var itemContainer =$("<div>")
      var item =$("<p>")
      
    // Then give it an ID of the form: "item-4" or "item-3" or "item-99", where the number is equal to toDoCount.

      item.attr("id", "item-" + addItemCount)
      itemContainer.attr("id", "cont-" + addItemCount)

    // Then append the todo text to this <p> element.

      item.append(value)
      console.log(item)
    // Create a button with unique identifers based on what number it is in the list. Again use jquery to do this.
      var button =$("<button>")
    // Give your button a data attribute called data-todo and a class called "checkbox".
      button.attr("data-item", addItemCount)
    // Lastly append a letter X inside.  
      button.addClass('checkbox')
      button.append('x')


    // Append the button to the add item
      itemContainer.append(item, button)


    // Add the button and item to the add div
      $('#addItems').append(itemContainer)


    // Clear the textbox when done
      $('#item').val("");

      itemContainer.addClass('boxes')
      var t = $('.boxes');
      console.log(t)

      t.css('float', 'left');

    // Add to the todoCount
      addItemCount++

    // Prevent Form from Refreshing (return false)
    return false;
  };


//Displays text
  $("#addItem").on("click", function(){

    // Get the Todo "value" from the textbox
    value = $('#item').val().trim();
    addtocart(value);
    return false;

  });

  $("img").on("click", function(){
    var imgValue = $(this).attr('alt')
    // console.log(imgValue)
    addtocart(imgValue);
  });

  
  // return false;

// When a user clicks a check box then delete the specific content
  $(document.body).on('click', '.checkbox', function(){

          // Get the todoNumber of the button from its data attribute.
          var itemNumber = $(this).data('item');

          // Empty the specific <p> element that previously held the todo item.
          $('#cont-'+itemNumber).remove();
  });
  return false;

});

