$(function() {
    $(".panda").click(function() {
        var type = $(this).attr("data-type");
        var tendance = $(this).attr("data-tendance");
        alert(type+" "+tendance);
    });
});