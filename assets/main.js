
$("button").on("click", function() {
var arch = $(this).attr("data-act");
var queryURL = "https://api.giphy.com/v1/gifs/search?q="+arch+"&api_key=ImTetxx1SW2DcKfvhQE6l23mcj4wxnOk";


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    
var results = response.data;
console.log(results);
for (var i = 0; i < results.length; i++) {
    var actDiv = $("<div>");

    var actImage = $("<img>");
    actImage.attr("src", results[i].images.fixed_height.url);

    actDiv.prepend(actImage);

    $("#gifs").prepend(actDiv);
            }
});
});