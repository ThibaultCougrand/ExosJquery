$(function() {
    $("#bouton").on("click", function() {
        var joliObjet = {
            first_name: "",
            last_name: "",
            city: ""
        };
        joliObjet.first_name = $("#first_name").val();
        joliObjet.last_name = $("#last_name").val();
        joliObjet.city = $("#city").val();
        console.log(joliObjet);
        $("#username").text(joliObjet.first_name+" "+joliObjet.last_name);
    });
});