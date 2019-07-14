$(document).ready(function () {

    console.log('I hope this works.');


    $('.jQuery').text('it works!')

    const apiKey = 'gAw2fynIwAANSTYnFxo7kHEYbOEsfAov'

    let queryURL = "https://api.giphy.com/v1/gifs/search?q=cheeseburger&limit=5&api_key=" + apiKey;

    $.ajax({
        type: "GET",
        url: queryURL,
        success: function (response) {
            console.log(response);
        }
    });

});