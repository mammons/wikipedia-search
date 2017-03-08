$(document).ready(function () {

    $("form").submit(function (event) {
        var queryTerm = document.querySelector("#searchBox").value;
        event.preventDefault(); //this stops the page from refreshing

        $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=5&search=' + queryTerm + '&callback=?')
            .done(function (data) {
                $("#results").empty();

                for (var i = 0; i < data[1].length; i++) {
                    var appendHTML = [
                        "<div class='result'>",
                        "<a href='", data[3][i], "' target = '_blank'>",
                        "<h3>", data[1][i], "</h3></a>",
                        "<p class='subjectDescription'>", data[2][i], "</p>"
                    ].join("\n");
                    console.log(appendHTML);
                    $('#results').append(appendHTML).hide().fadeIn("slow");
                }
            });
    });
});

function populateDisplayWith(json) {
    $("#results").empty();
    console.log("populating");

    for (var i = 0; i < json[1].length; i++) {
        var appendHTML = ["<div class='result'>",
            "<a href='" + json[3][i] + "' target = '_blank'>",
            "<h3>" + json[1][i] + "</h3></a>",
            "<p class='subjectDescription'>" + json[2][i] + "</p>"
        ].join("\n");
        //console.log(appendHTML);
        $('#results').append(appendHTML).hide().fadeIn();
    }

}