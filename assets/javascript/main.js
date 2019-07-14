$(document).ready(function () {
    //variables and button array
    let animals = ["pig", "cow", "lizard", "snake", "quokka"]

    // const apiKey = "gAw2fynIwAANSTYnFxo7kHEYbOEsfAov";

    // let buttonVal = "cheeseburger"

    // let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonVal + "&limit=10&api_key=" + apiKey;

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

    //makes buttons based on user input
    $("#submitBtn").on("click", function (event) {
        event.preventDefault();
        let userInput = $("#textBox").val().trim();
        animals.push(userInput);
        makeButtons();
    });

    $(".gifBtn").on("click", function (event) {
        event.preventDefault();
        // $("button").attr("data-name")
        console.log("test");
    });

    makeButtons();




    // $.ajax({
    //     type: "GET",
    //     url: queryURL,
    //     success: function (response) {
    //         console.log(response);
    //         let results = response.data;

    //     }
    // });

});