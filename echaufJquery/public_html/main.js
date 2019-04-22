$(function () {

    //bouton créer
    $("#creer").on("click", function () {
        var color;
        switch ($('#input').val()) {
            case "bleu":
                color = "bleu";
                break;
            case "rouge":
                color = "rouge";
                break;
            case "vert":
                color = "vert";
                break;
            default :
                color = "jaune";
                break;
        }
        var div = $("<div></div>").css("width", "50px").css("height", "50px").addClass(color);

//        if ($("#input").val() !== "") {
//            var color = $("#input").val();
//        }
//        var div = document.createElement("div");
//        div.style = `background-color: yellow;`;
//        div.style = `background-color: ${color};`; 

        $("#cadre").append(div);
    });

    //bouton suprimmer
    $("#suprimmer").on("click", function () {

        var color = "." + $("#input").val();
        $("#cadre div").remove(color);

//        var color = $("#input").val();
//        $("#cadre div").remove(`[style='background-color: ${color};']`);
    });

    //bouton détruire
    $("#detruire").on("click", function () {
        $("#cadre div").remove();
    });

    //bouton écrire
    $("#ecrire").on("click", function () {
        var texte = $("#input").val();
        $("#cadre div").text(texte);
    });

    //bouton vider
    $("#vider").on("click", function () {
        $("#input").val("");
        $("#cadre div").text("");
    });

    //bouton shake
    $("#shake").on("click", function () {
        $("#cadre div").effect("shake", 2000);
    });

    //div rouge explosion
    //$("#cadre").delegate(".rouge", "click", function() {
    $("#cadre").on("click", ".rouge", function () {
        $(this).effect("explode", 600, function () {
            $(this).remove();
        });
    });

    //div verte deviennent bleu en hover
    $("#cadre").on("mouseover", ".vert", function () {
        $(this).addClass("bleu").removeClass("vert");
    });

    //div jaunes deviennent rouge 3 sec après click
    $("#cadre").on("click", ".jaune", function () {
        $(this).css("transition-delay", "2s").attr("class", "rouge"); //ça explose moche.
    });

    //double click sur une div affiche dans un modal le nombre de div de la même coucleur.
    $("#cadre").on("dblclick", "div", function () {
        var classe = $(this).attr("class");
        var count = $("."+classe).length;
        $("#modal").dialog({modal: true, title: `Vous avez ${count} div ${classe}`});
    });
});