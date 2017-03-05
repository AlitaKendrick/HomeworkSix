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

$(document).on("click", ".food");

renderButtons();


});