//Laskurin funktiot
function Laske() {
    var luku1 = Number(document.forms["luvut"]["l1"].value);
    var luku2 = Number(document.forms["luvut"]["l2"].value);
    switch (luku1 < 1 || luku2 < 1 || luku1 > 10 || luku2 > 10) {
        case true:
            window.alert("Molempien kenttien lukujen tulee olla väliltä 1-10");
            break;
        default:
            var summa = luku1 + luku2;
            var erotus = luku1 - luku2;
            var tulo = luku1 * luku2;
            var jako = luku1 / luku2;
            var lukujono = "";
            var i;
            if (luku1 <= luku2) {
                for (i = luku1; i <= luku2; i++) {
                    lukujono += i + " ";
                }
            } else {
                for (i = luku2; i <= luku1; i++) {
                    lukujono += i + " ";
                }
            }
            document.getElementById("summadiv").innerHTML = "Summa: " + summa;
            document.getElementById("erotusp").innerHTML = "Erotus: " + erotus;
            document.getElementById("tulop").innerHTML = "Tulo: " + tulo;
            document.getElementById("jakop").innerHTML = "Jakojäännös: " + jako;
            document.getElementById("lukujonop").innerHTML = "Luvut pienimmästä suurimpaan: " + lukujono;
    }
}

function Tyhjenna() {
    document.forms["luvut"]["l1"].value = "";
    document.forms["luvut"]["l2"].value = "";
    document.getElementById("summadiv").innerHTML = "";
    document.getElementById("erotusp").innerHTML = "";
    document.getElementById("tulop").innerHTML = "";
    document.getElementById("jakop").innerHTML = "";
    document.getElementById("lukujonop").innerHTML = "";

}
function Tarkista() {
    var komento = document.forms["tanssita"]["koodi"].value;
    var i = 0;
    if (komento == "robot.jump();") {
        document.getElementById("robotti").innerHTML = '"Hienoa, onnistuit!"' + "<center>" + "<img class='robot' src='robo1.png'>" + "<img class='robot' src='robo2.png'>" + "</center>";
        w3.slideshow(".robot", 400);
    }else if (komento == "robot.stop();") {
        document.getElementById("robotti").innerHTML = '"Jes, koodisi oli oikein!"' + "<center>" + "<img class='robot' src='robostoppi.png'>" + "</center>";
    } else {
        document.getElementById("robotti").innerHTML ='Syntax error: koodisi on väärin. Kokeile uudestaan!';
    }
}

function Uusi() {
    document.forms["tanssita"]["koodi"].value = "";

}
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

