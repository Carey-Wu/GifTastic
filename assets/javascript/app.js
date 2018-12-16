
// Array of original buttons
var topics = [ 
    "Ironman",
    "Thor",
    "Hulk",
    "Black Widow",
    "Captain America",
    "Wolverine",
    "Thanos",
    "Starlord"
];

// Function to make buttons
function makeBtns() {

    // Deleting existing buttons to avoid duplicates
    $(".button-holder").empty();

    // Looping through the array of topics
    for (var i = 0; i < topics.length; i++) {

      // Dynamicaly generating buttons for each character in the array using JQuery
      var name = $("<button>");
      // Adding a class
      name.addClass("btn btn-primary");
      // Adding a data-attribute with a value of the array at index i
      name.attr('character-name', topics[i]);
      // Providing the button's text with a value of the array at index i
      name.text(topics[i]);
      // Adding the button to the HTML
      $(".button-holder").append(name);
    }
  }
// Calling the function to make the buttons  
makeBtns();


// Function to call the API and generate Gifs from it
function gifInfo(){
    // Setting variable equal to the value of the attribute of 'character-name' of the button 
    var character = $(this).attr('character-name');

    // Console logging the character name now associated with the variable: character
    console.log(character);

    // Setting a variable for the API URL using the variable character to complete the search parameter of the API call
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=wSIksXpc8DXBGt2M0PfFwBrU14BVeo15&limit=10";

    // AJAX call to retrieve API data
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)

     // Storing an array of results in the results variable
     var results = response.data;

     // Looping over every result item
     for (var i = 0; i < results.length; i++) {

       
         // Creating a div for the gif
         var gifDiv = $("<div id='pics'>");

         // Storing the rating associated with the gif (found in the object)
         var rating = results[i].rating;

         // Creating a paragraph tag with the rating
         var ratingText = $("<p>").text("Rating: " + rating);

         // Creating an image tag
         var image = $("<img>");

         // Variables to set attributes to the image using paths in the result object
         var still = results[i].images.original_still.url;
         var moving = results[i].images.original.url;

         // Giving the image tag a class, src, and unique attributes that point back at data within the result object
         image.addClass("gif")
         image.attr("src", still);
         image.attr("pic-still", still);
         image.attr("pic-animate", moving);
         image.attr("pic-state", "still");

         // Appending the paragraph and image we created to the "gifDiv" div we created
         gifDiv.append(ratingText);
         gifDiv.append(image);

         // Prepending the gifDiv to the "#gifs-holder" div in the HTML
         $("#gif-holder").prepend(gifDiv);
       
     }
    })

}

// Function to select the state of the gifs generated.  Uses If Else statements to determine the src of the image.
function gifImages(){

    var flux = $(this).attr("pic-state");

    if (flux === "still") {
        $(this).attr("src", $(this).attr("pic-animate"));
        $(this).attr("pic-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("pic-still"));
        $(this).attr("pic-state", "still");
    }
}

// Event listener for clicking the button in the form field to add a character and clear out the field
$("#add-character").on("click", function(event){

    event.preventDefault();

    var person = $("#name-input").val().trim();
    topics.push(person);
    makeBtns();
    document.getElementById("characterNameInput").reset();

})

// Event listener to allow the dynamically generated buttons call API info
$(document).on("click", ".btn-primary", gifInfo);

// Event listener for the gifs to be clicked on to set their state which changes the url source
$(document).on("click", ".gif", gifImages);

