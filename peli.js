// Korttipakan luonti ja sekoitus ja kaksi korttia pelaajalle
var maa = '';
var pakka = [];
for (var y = 0; y < 4; y++) {
	if (y == 0) {
		maa = "&clubs;";
	}
	if (y == 1) {
		maa = "&hearts;";
	}
	if (y == 2) {
		maa = "&diams;";
	}
	if (y == 3) {
		maa = "&spades;";
	}
	for (var x = 0; x < 13; x++) {
		pakka.push([
			maa,
			x + 1
		])
	}
};
//pakan sekoitus
pakka.sort(function (a, b) { return 0.5 - Math.random() });
//jaetaan pelaajalle kaksi korttia
var kortti = 0;
var kortinArvo = pakka[kortti][1];
var kortinMaa = pakka[kortti][0];
var summa = pakka[kortti][1];
kortti++;

if (kortinMaa == "&clubs;" || kortinMaa == "&spades;") {
	document.getElementById("p1").innerHTML = "<div class='value-top'>" + kortinArvo + "</div><div class='suit spades'>" + kortinMaa 
	+ "</div><div class='value-bottom'>" + kortinArvo + "</div>";
} else {
	document.getElementById("p1").innerHTML = "<div class='value-top'>" + kortinArvo + "</div><div class='suit hearts'>" + kortinMaa 
	+ "</div><div class='value-bottom'>" + kortinArvo + "</div>";
}
kortinArvo = pakka[kortti][1];
kortinMaa = pakka[kortti][0];
summa = summa + pakka[kortti][1];
kortti++;

if (kortinMaa == "&clubs;" || kortinMaa == "&spades;") {
	document.getElementById("p2").innerHTML = "<div class='value-top'>" + kortinArvo + "</div><div class='suit spades'>" + kortinMaa 
	+ "</div><div class='value-bottom'>" + kortinArvo + "</div>";
} else {
	document.getElementById("p2").innerHTML = "<div class='value-top'>" + kortinArvo + "</div><div class='suit hearts'>" + kortinMaa 
	+ "</div><div class='value-bottom'>" + kortinArvo + "</div>";
}

if (summa > 21) {
	document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Hävisit" + "<br />"
	+ "<button id='nollaa' onclick='uusiPeli(true)' class='tilaa'>" + "Uusi peli" + "</button>" + "</div>" + "</div>";
} else if (summa == 21) {
	document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Voitit" + "<br />"
	+ "<button id='nollaa' onclick='uusiPeli(true)' class='tilaa'>" + "Uusi peli" + "</button>" + "</div>" + "</div>";
}

//Pelaajan kasi
function nostakortti() {
	kortinArvo = pakka[kortti][1];
	kortinMaa = pakka[kortti][0];
	summa = summa + pakka[kortti][1];
	kortti++;
	//nostaa kolmannen kortin
	if (kortti == 3) {
		if (kortinMaa == "&clubs;" || kortinMaa == "&spades;") {
			document.getElementById("p3").innerHTML ="<div class='value-top'>" + kortinArvo + "</div><div class='suit spades'>" + kortinMaa 
			+ "</div><div class='value-bottom'>" + kortinArvo + "</div>";
		} else {
			document.getElementById("p3").innerHTML ="<div class='value-top'>" + kortinArvo + "</div><div class='suit hearts'>" + kortinMaa 
			+ "</div><div class='value-bottom'>" + kortinArvo + "</div>";
		}
	}
	//summan tarkastus
	if (summa > 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Hävisit" + "<br />"
		+ "<button id='nollaa' onclick='uusiPeli(true)' class='tilaa'>" + "Uusi peli" + "</button>" + "</div>" + "</div>";
	} else if (summa == 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Voitit" + "<br />" 
		+ "<button id='nollaa' onclick='uusiPeli(true)' class='tilaa'>" + "Uusi peli" + "</button>" + "</div>" + "</div>";
	}
	//nostaa neljännen kortin
	if (kortti == 4) {
		if (kortinMaa == "&clubs;" || kortinMaa == "&spades;") {
			document.getElementById("p4").innerHTML = "<div class='value-top'>" + kortinArvo + "</div><div class='suit spades'>" + kortinMaa 
			+ "</div><div class='value-bottom'>" + kortinArvo + "</div>";
		} else {
			document.getElementById("p4").innerHTML = "<div class='value-top'>" + kortinArvo + "</div><div class='suit hearts'>" + kortinMaa 
			+ "</div><div class='value-bottom'>" + kortinArvo + "</div>";
		}
	}
	//summan tarkastus
	if (summa > 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Hävisit" + "<br />" 
		+ "<button id='nollaa' onclick='uusiPeli(true)' class='tilaa'>" + "Uusi peli" + "</button>" + "</div>" + "</div>";
	} else if (summa == 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Voitit" + "<br />" 
		+ "<button id='nollaa' onclick='uusiPeli(true)' class='tilaa'>" + "Uusi peli" + "</button>" + "</div>" + "</div>";
	}
	//nostaa viidennen kortin
	if (kortti == 5) {
		if (kortinMaa == "&clubs;" || kortinMaa == "&spades;") {
			document.getElementById("p5").innerHTML = "<div class='value-top'>" + kortinArvo + "</div><div class='suit spades'>" + kortinMaa 
			+ "</div><div class='value-bottom'>" + kortinArvo + "</div>";
		} else {
			document.getElementById("p5").innerHTML = "<div class='value-top'>" + kortinArvo + "</div><div class='suit hearts'>" + kortinMaa 
			+ "</div><div class='value-bottom'>" + kortinArvo + "</div>";
		}
	}
	//summan tarkastus
	if (summa > 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Hävisit" + "<br />"
		+ "<button id='nollaa' onclick='uusiPeli(true)' class='tilaa'>" + "Uusi peli" + "</button>" + "</div>" + "</div>";
	} else if (kortti == 5) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Voitit" + "<br />"
		+ "<button id='nollaa' onclick='uusiPeli(true)' class='tilaa'>" + "Uusi peli" + "</button>" + "</div>" + "</div>";
	}
}
//Jakajan käsi
function jaa() {
	kortinArvo = pakka[kortti][1];
	kortinMaa = pakka[kortti][0];
	var jsumma = 0;
	var jkortti = 1;
	// eka kortti näytetään
	if (kortinMaa == "&clubs;" || kortinMaa == "&spades;") {
		document.getElementById("j1").innerHTML = "<div class='value-top'>" + kortinArvo + "</div><div class='suit spades'>" + kortinMaa 
		+ "</div><div class='value-bottom'>" + kortinArvo + "</div>";
	} else {
		document.getElementById("j1").innerHTML = "<div class='value-top'>" + kortinArvo + "</div><div class='suit hearts'>" + kortinMaa 
		+ "</div><div class='value-bottom'>" + kortinArvo + "</div>";
	}
	//summan muodostus ja vertailu pelaajan summaan
	jsumma = pakka[kortti][1];
	if (jsumma >= summa) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover' class='tilaa'>" + "Hävisit" + "<br />"
		+ "<button id='nollaa' onclick='uusiPeli(true)'>" + "Uusi peli" + "</button>"+ "</div>" + "</div>";
		return;
	}
	//toinen kortti näytetään
	kortti++;
	jkortti++;
	kortinArvo = pakka[kortti][1];
	kortinMaa = pakka[kortti][0];

	if (kortinMaa == "&clubs;" || kortinMaa == "&spades;") {
		document.getElementById("j2").innerHTML = "<div class='value-top'>" + kortinArvo + "</div><div class='suit spades'>" + kortinMaa 
		+ "</div><div class='value-bottom'>" + kortinArvo + "</div>";
	} else {
		document.getElementById("j2").innerHTML = "<div class='value-top'>" + kortinArvo + "</div><div class='suit hearts'>" + kortinMaa 
		+ "</div><div class='value-bottom'>" + kortinArvo + "</div>";
	}
	//summien vertailu
	jsumma = jsumma + pakka[kortti][1];
	if (jsumma > 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover' class='tilaa'>" + "Voitit" + "<br />"
		+ "<button id='nollaa' onclick='uusiPeli(true)'>" + "Uusi peli" + "</button>"+ "</div>" + "</div>";
		return;
	}
	else if (jsumma >= summa) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover' class='tilaa'>" + "Hävisit" + "<br />"
		+ "<button id='nollaa' onclick='uusiPeli(true)'>" + "Uusi peli" + "</button>"+ "</div>" + "</div>";
		return;
	}
	//kolmas kortti näytetään
	kortti++;
	jkortti++;
	kortinArvo = pakka[kortti][1];
	kortinMaa = pakka[kortti][0];

	if (kortinMaa == "&clubs;" || kortinMaa == "&spades;") {
		document.getElementById("j3").innerHTML = "<div class='value-top'>" + kortinArvo + "</div><div class='suit spades'>" + kortinMaa 
		+ "</div><div class='value-bottom'>" + kortinArvo + "</div>";
	} else {
		document.getElementById("j3").innerHTML = "<div class='value-top'>" + kortinArvo + "</div><div class='suit hearts'>" + kortinMaa 
		+ "</div><div class='value-bottom'>" + kortinArvo + "</div>";
	}
	//summien vertailu
	jsumma = jsumma + pakka[kortti][1];
	if (jsumma > 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover' class='tilaa'>" + "Voitit" + "<br />"
		+ "<button id='nollaa' onclick='uusiPeli(true)'>"+ "Uusi peli" + "</button>"+ "</div>" + "</div>";
		return;
	}
	else if (jsumma >= summa) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover' class='tilaa'>" + "Hävisit" + "<br />"
		+ "<button id='nollaa' onclick='uusiPeli(true)'>" + "Uusi peli" + "</button>"+ "</div>" + "</div>";
		return;
	}
	// neljäs kortti näytetään
	kortti++;
	jkortti++;
	kortinArvo = pakka[kortti][1];
	kortinMaa = pakka[kortti][0];

	if (kortinMaa == "&clubs;" || kortinMaa == "&spades;") {
		document.getElementById("j4").innerHTML = "<div class='value-top'>" + kortinArvo + "</div><div class='suit spades'>" + kortinMaa 
		+ "</div><div class='value-bottom'>" + kortinArvo + "</div>";
	} else {
		document.getElementById("j4").innerHTML = "<div class='value-top'>" + kortinArvo + "</div><div class='suit hearts'>" + kortinMaa 
		+ "</div><div class='value-bottom'>" + kortinArvo + "</div>";
	}
	//summien vertailu
	jsumma = jsumma + pakka[kortti][1];
	if (jsumma > 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover' class='tilaa'>" + "Voitit" + "<br />"
		+ "<button id='nollaa' onclick='uusiPeli(true)'>" + "Uusi peli" + "</button>"+ "</div>" + "</div>";
		return;
	}
	else if (jsumma >= summa) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover' class='tilaa'>" + "Hävisit" + "<br />"
		+ "<button id='nollaa' onclick='uusiPeli(true)'>" + "Uusi peli" + "</button>"+ "</div>" + "</div>";
		return;
	}
	//viides kortti näytetään
	kortti++;
	jkortti++;
	kortinArvo = pakka[kortti][1];
	kortinMaa = pakka[kortti][0];

	if (kortinMaa == "&clubs;" || kortinMaa == "&spades;") {
		document.getElementById("j5").innerHTML = "<div class='value-top'>" + kortinArvo + "</div><div class='suit spades'>" + kortinMaa 
		+ "</div><div class='value-bottom'>" + kortinArvo + "</div>";
	} else {
		document.getElementById("j5").innerHTML = "<div class='value-top'>" + kortinArvo + "</div><div class='suit hearts'>" + kortinMaa 
		+ "</div><div class='value-bottom'>" + kortinArvo + "</div>";
	}
	//summien vertailu
	jsumma = jsumma + pakka[kortti][1];
	if (jsumma > 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover' class='tilaa'>" + "Voitit" + "<br />"
		+ "<button id='nollaa' onclick='uusiPeli(true)'>" + "Uusi peli" + "</button>"+ "</div>" + "</div>";
		return;
	}
	else if (jsumma >= summa || jkortti == 5) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover' class='tilaa'>" + "Hävisit" + "<br />"
		+ "<button id='nollaa' onclick='uusiPeli(true)'>" + "Uusi peli" + "</button>"+ "</div>" + "</div>";
		return;
	}
}

function uusiPeli() {
	location.reload(true);
}

