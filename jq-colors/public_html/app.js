// good luck !
$(function () {
    function colorDiv() {
        $(".color").each(function() {
            var color = $(this).attr("data-color");
            $(this).css("background-color", color);
        });
    }
    colorDiv();
    $(".color").on("click", function() {
        var color = $(this).attr("data-color");
        if ($("#modify-texte").is(':checked')) {
            $(".main p").css("color", color);
        } else {
            $(".main").css("background-color", color);
        } 
    });
});
