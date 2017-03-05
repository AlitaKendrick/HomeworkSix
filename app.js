$(document).ready(function(){

debugger;


//original array of foods
var foods = ["Pizza","Cake", "Cheese", "Wine", "Pasta", "Tacos", "Pancakes", "Sandwich","Broccoli" ];


function renderButtons(){

	$("#foodButton").empty();

//loop through array of food
	for(var i = 0; i < foods.length; i++) {

//creates button for each movie in the array
	var a = $("<button>");
    $("#foodButton").append(a);
//adds 'food' class to the button
	a.addClass("foodie");
//adds data-attribute
	a.attr("data-name", foods[i]);
//provides button text
	a.text(foods[i]);
//adds button to button list;
	
	}
};


$("#addfood").on("click", function(){
	event.preventDefault();
	var food = $("#food-input").val().trim();
	foods.push(food);
	renderButtons();

});

renderButtons();

//function that links url to array to display gif
$("button").on("click", function(){
	var food = $(this).attr("data-name");
	console.log("clicked");

	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        food + "&api_key=dc6zaTOxFJmzC&limit=10";

        // $('queryURL').data("state", "stil");
        // $('queryURL').data("still", "http://media2.giphy.com/");
        // $('queryURL').data("animate", "http://media2.giphy.com/")
        // $('queryURL').addClass('gif');
        // console.log(queryURL.data-state);

	$.ajax({
          url: queryURL,
          method: "GET"
        })
        // After data comes back from the request
        .done(function(response) {
        	// console.log(queryURL);
        	// console.log(response);

        	var results = response.data;

        		$("#foodsHere").empty();

        	for(var i = 0; i < results.length; i++) {

        		var foodDiv = $("<div>");

        		var p = $("<p class='ratingc'>").text("Rating: " + results[i].rating);

        		var foodImage = $("<img>");

        		foodImage.attr("src", results[i].images.fixed_height.url);

        		foodDiv.append(p);
            	foodDiv.append(foodImage);
            	foodDiv.addClass('foodDiv')

            	$("#foodsHere").prepend(foodDiv);

        	}
        });
});


});