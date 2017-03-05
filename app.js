$(document).ready(function(){

debugger;


//original array of foods
var foods = ["Pizza","Cake", "Cheese", "Wine", "Pasta", "Tacos", "Pancakes", "Sandwich","Broccoli" ];


function renderButtons(){
	$("#buttons-view").empty();
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
	 $("#buttons-view").append(a);
	}
};
renderButtons();


$("#addfood").on("click", function(event){
    event.preventDefault();
    // var food = $("<button>")
    var food = $("#food-new").val();
    foods.push(food);
    renderButtons();
});

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
        .done(function complete(response) {
        	// console.log(queryURL);
        	// console.log(response);

        	var results = response.data;

        		$("#foodsHere").empty();

        	for(var i = 0; i < results.length; i++) {

        		var foodDiv = $("<div>");

        		var p = $("<p class='ratingc'>").text("Rating: " + results[i].rating);

        		var foodImage = $("<img>");

        		foodImage.attr({
                "src": results[i].images.fixed_height_still.url,
                "data-still": results[i].images.fixed_height_still.url,
                "data-animate": results[i].images.fixed_height.url,
                "data-state": "still"
                 });

        		foodDiv.append(p);
            	foodDiv.append(foodImage);
            	foodDiv.addClass('foodDiv')

            	$("#foodsHere").prepend(foodDiv);
        	}
            $('img').on('click', toggleStill);
        });
});


function toggleStill(){

    var state   =$(this).attr('data-state');
        if(state == 'still'){
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }
        console.log($(this).attr("src"));

    }

// $(document).on("click", ".foodie",renderButtons);

});