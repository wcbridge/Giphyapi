
var actors = ["Jason Momoa", "James Dean", "Anton Yelchin", "Errol FLynn"];
function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < actors.length; i++) {
        var a = $("<button>");
        a.addClass("actor-btn");
        a.attr("data-name", actors[i]);
        a.text(actors[i]);
        $("#buttons-view").append(a);
    }
}

$("#add-actor").on("click", function (event) {
    event.preventDefault();
    var actor = $("#actor-input").val().trim();
    actors.push(actor);
    renderButtons();
});

function display() {
    var actor = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + actor + "&api_key=ImTetxx1SW2DcKfvhQE6l23mcj4wxnOk";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {       
var res =response.data;

for (let i = 0; i < 10; i++) {
    main = $('<img>');
    main.addClass('gif')
    main.attr('src', res[i].images.fixed_height_still.url);
    main.attr('data-still', res[i].images.fixed_height_still.url)
    main.attr('data-animate', res[i].images.fixed_height.url)
    main.attr('data-state', 'still') 

    $('#gifView').prepend(main)

    $(".gif").on("click", function () {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });
}
}
    
    )}
$(document).on("click", ".actor-btn", display);
    
renderButtons()