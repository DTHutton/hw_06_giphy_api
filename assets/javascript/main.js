$(document).ready(function () {

    //api key and button array
    let animals = ["pig", "cow", "lizard", "snake", "quokka"]

    const apiKey = "gAw2fynIwAANSTYnFxo7kHEYbOEsfAov";


    //makes the buttons
    makeButtons = () => {
        $(".buttons").empty();
        for (let i = 0; i < animals.length; i++) {

            const btnTemplate = `
            <button data-name="${animals[i]}" class="gifBtn">
                ${animals[i]}
            </button>
            `
            $(".buttons").append(btnTemplate);
        }
    }
    
    makeButtons();

    //makes buttons based on user input
    $("#submitBtn").on("click", function (event) {
        event.preventDefault();
        let userInput = $("#textBox").val().trim();
        animals.push(userInput);
        makeButtons();
        
    });


    //generates gifs 
    $(".buttons").on("click", ".gifBtn", function (event) {
        event.preventDefault();

        let btnVal = $(this).attr("data-name")
        console.log(btnVal);

        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + btnVal + "&limit=10&api_key=" + apiKey;

        $.ajax({
            type: "GET",
            url: queryURL,
            success: function (response) {

                let results = response.data;
                console.log(results);

                for (let j = 0; j < results.length; j++) {
                    let gifUrl = results[j].images.fixed_height.url;
                    let rating = results[j].rating;
                    let gifTemplate = `
                <div class="gifs">
                    <p>Rating: ${rating}</p>
                    <img src="${gifUrl}">
                    <br>
                </div>
                `
                    $(".gifDisplay").prepend(gifTemplate);
                }
            }
        });
    });






});