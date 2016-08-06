$( document ).ready(function() {
var sugarFoods = ["assets/images/sugar foods/chocolate.png", "assets/images/sugar foods/cookie.png", "assets/images/sugar foods/iceCream.png", "assets/images/sugar foods/oliveOil.png", "assets/images/sugar foods/sugar.png",]
console.log(sugarFoods);

   for (var i=0; i< numbers.length; i++){

      var imageSugar = $('<img>');

      imageSugar.attr('alt', 'sugar');

      imageSugar.addClass('sugarImage');

      $('#sugarFoods').append(sugarImage);
      console.log("sugar foods: " + sugarImage)
    }

    // $('.crystalImage').on('click', function(){
    //   counter = counter + parseInt($(this).data('num'));

    //   $('#yourNumber').text(counter);

    //   if (counter == numberToGuess){
    //     alert('You won!!!!');
    //   }else if( counter > numberToGuess){
    //     alert('You lost!');
    //   }
    });




});