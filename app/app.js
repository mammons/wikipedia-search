$(document).ready(function () {

    $("form").submit(function (event) {
        var queryTerm = document.querySelector("#searchBox").value;
        $('#searchBox').val('');
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
                    $('#results').append(appendHTML).hide().fadeIn("slow");
                }
            });
    });
});