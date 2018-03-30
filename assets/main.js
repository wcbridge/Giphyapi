
var actors = ["Jason Momoa", "James Dean", "Anton Yelchin", "Errol FLynn"];

function renderButtons() {


    $("#buttons-view").empty();


    for (var i = 0; i < actors.length; i++) {


        var a = $("<button>");
        a.addClass("actor-btn");
        a.attr("data-name", actors[i]);
        ;
        a.text(actors[i]);
        $("#buttons-view").append(a);
    }
    //  console.log(actors);
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
      
        console.log(response.data);
var res =response.data;

       // var still = res.images["480w_still"];
        var ani = res["0"].images.fixed_height.url;
        var actorImg = $('<img>');
        actorImg.attr('src', ani)

        console.log(ani);

        $('#gifView').append(actorImg);
       // $('#gifView').append(still)

    });

}

$(document).on("click", ".actor-btn", display);

renderButtons()