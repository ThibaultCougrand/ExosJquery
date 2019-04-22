$(document).ready(function(){
	//votre code
        var count = 0;
        var count20 = 0;
        var message = [
            "Tu devrais faire autre chose de ta vie...",
            "Il fait beau dehor",
            "Ta vie a vraiment l'air palpitante.",
            "Quoi tu es encore là?",
            "Bon il serait temps de faire autre chose maintenant."
        ];
        $(".cake").on("click", function() {
            count++;
            count20++;
            console.log(count);
            $(".counter").text(count);
            if (count20 === 20) {
                count20 = 0;
                var randomMessage = Math.floor(Math.random()*message.length);
                alert(message[randomMessage]);
            }
        });

});