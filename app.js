$(document).ready(function(){

debugger;


//original array of foods
var foods = ["Pizza", "Apple", "Cake", "Cheese" ];


// function displayFoodGifs(){
// //function re-renders HTML to display appropriate content
// 	var food = $(this).attr("data-name");
// 	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
//         food + "&api_key=dc6zaTOxFJmzC&limit=10";

//     $.ajax({
//           url: queryURL,
//           method: "GET"
//         }).done(function(response) {

//  //create div to hold food
//     var foodDiv = $("<div class=foodD");

// //store rating data
// 	var rating = response.rating;

// //create element to display
// 	var pOne = $("<p>").text("Rating: " + rating);

// //displaying the rating
// 	foodDiv.append(pOne);
// 	});
// };


function renderButtons(){

	$("#foodButton").empty();

//loop through array of food
	for(var i = 0; i < foods.length; i++) {

//creates button for each movie in the array
	var a = $("<button>");
//adds 'food' class to the button
	a.addClass("foodie");
//adds data-attribute
	a.attr("data-name", foods[i]);
//provides button text
	a.text(foods[i]);
//adds button to button list;
	$("#foodButton").append(a);
	}
};


$("#addfood").on("click", function(){
	event.preventDefault();
	var food = $("#food-input").val().trim();
	foods.push(food);
	renderButtons();

});

// $(document).on("click", ".food", displayFoodGifs);

renderButtons();

$("button").on("click", function(){
	var food = $(this).attr("data-name");
	console.log("clicked");

	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        food + "&api_key=dc6zaTOxFJmzC&limit=10";

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

        		var p = $("<p>").text("Rating: " + results[i].rating);

        		var foodImage = $("<img>");

        		foodImage.attr("src", results[i].images.fixed_height.url);

        		foodDiv.append(p);
            	foodDiv.append(foodImage);

            	$("#foodsHere").prepend(foodDiv);
        	}

        });
});


});