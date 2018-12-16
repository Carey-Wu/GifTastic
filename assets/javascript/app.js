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

function makeBtns() {

    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $(".button-holder").empty();

    // Looping through the array of movies
    for (var i = 0; i < topics.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array.
      // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
      var name = $("<button>");
      // Adding a class
      name.addClass("btn btn-primary");
      // Adding a data-attribute with a value of the movie at index i
      name.attr("data-name", topics[i]);
      // Providing the button's text with a value of the movie at index i
      name.text(topics[i]);
      // Adding the button to the HTML
      $(".button-holder").append(name);
    }
  }

$("#add-character").on("click", function(event){

    event.preventDefault();

    var person = $("#name-input").val().trim();
    topics.push(person);
    makeBtns();
    document.getElementById("characterNameInput").reset();

})

$("button").on("click", function(){
    var character = $(this).attr("data-name");

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=wSIksXpc8DXBGt2M0PfFwBrU14BVeo15&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
    })

})

/*$("button").on("click", function(){
    var character = $(this).attr("character-name");

    var queryURL = $.get("https://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=wSIksXpc8DXBGt2M0PfFwBrU14BVeo15&limit=10");
    queryURL.done(function(data) {console.log("success got data", data);})

})*/


makeBtns();
