
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

for (let i = 0; i < 9; i++) {
        var still = res[i].images.fixed_height_still.url;
        var ani = res[i].images.fixed_height.url;
        var main=$('<img>');
      console.log(ani)
      console.log(still)

    var si = main.attr('src', still)

    $('.gifView').prepend(si)

    

 
    
        $(".gifView").on("click", function () {
            console.log('here');

            if (si = main.attr('src', still)) {
                si = main.attr('src', ani)
            } else {
                si = main.attr('src', still)
            }
        } 
    
    );
}
}
    
    )}
$(document).on("click", ".actor-btn", display);
    
renderButtons()