/* 
1973
Bankrånare Janne Olssons gisslan uttrycker stor sympati för sin förövare och det interbationellt gångbara begreppet "stockholmssyndrom" föds.
1987
Västtyske 19-åringen Matthias Rust taxar in ett hyrt Cessna-plan på Röda Torget. KBG lägger genast vantarna på honom.
1975
Spanske diktatorn Francisco Franco dör.
1978
Sekten Folkets Tempel genomför ett massjälvmord, 913 medlemmar dör.
1960
Hitchcocks film Psycho har premiär.
1945
Efter att ha blivit refuserad av Bonniers ges en omarbetad version av Pippi Långstrump ut av Rabén och Sjögren.
1841
Edgare Allan Poes Morden på Rue Morgue, en föregångare till detektivberättelsen, finns nu att läsa.
1963
AB Svensk Bilprovning bildas.
1477
Nordens första universitet grundas i Uppsala.
1967
Sexdagarskriget mellan Israel och arabiska grannstater bryter ut.
*/

/* Globala variabler och konstanter*/
var frågor = [
    "Bankrånare Janne Olssons gisslan uttrycker stor sympati för sin förövare och det interbationellt gångbara begreppet \"stockholmssyndrom\" föds.",
    "Västtyske 19-åringen Matthias Rust taxar in ett hyrt Cessna-plan på Röda Torget. KBG lägger genast vantarna på honom.",
    "Spanske diktatorn Francisco Franco dör.",
    "Sekten Folkets Tempel genomför ett massjälvmord, 913 medlemmar dör.",
    "Hitchcocks film Psycho har premiär.",
    "Efter att ha blivit refuserad av Bonniers ges en omarbetad version av Pippi Långstrump ut av Rabén och Sjögren.",
    "Edgare Allan Poes Morden på Rue Morgue, en föregångare till detektivberättelsen, finns nu att läsa.",
    "AB Svensk Bilprovning bildas.",
    "Nordens första universitet grundas i Uppsala.",
    "Sexdagarskriget mellan Israel och arabiska grannstater bryter ut."
];
var årtal = [
    1973, 1987, 1975, 1978, 1960, 1945, 1841, 1963, 1477, 1967
];
var slumptal, 
    poäng = 0,
    varv = 10;

const elementKontainer = document.querySelector(".kontainer");
const elementFrågaRuta = document.querySelector("textarea");
const elementÅrtalRuta = document.querySelector("#årtal");
const elementKnappSkicka = document.querySelector("#skicka");
const elementKnappNästa = document.querySelector("#nästa");
const elementPoängRuta = document.querySelector("#poäng");
const elementTummeUpp = document.querySelector("#upp");
const elementTummeNed = document.querySelector("#ned");

/* Skapa en funktion för att slumpa fra en fråga */
function nyFråga() {
    /* Slumptal 0-9 */
    slumptal = Math.floor(Math.random() * 10);
    console.log(frågor[slumptal]);
    console.log(årtal[slumptal]);

    elementFrågaRuta.value = frågor[slumptal];
    elementÅrtalRuta.value = "";

    /* Dölj tummarna */
    elementTummeUpp.style.display = "none";
    elementTummeNed.style.display = "none";
}

/* Körs i början */
/* Kör funktionen! */
nyFråga();

/* Plocka fram en ny fråga när man klickar på knappen Nästa */
elementKnappNästa.addEventListener("click", nyFråga);

/* Kolla om man svarat rätt årtal på frågan */
elementKnappSkicka.addEventListener("click", kollaSvaret);

/* Skapa en funktion för att kolla svaret är rätt */
function kollaSvaret() {
    /* Läs av svaret */
    var svaret = elementÅrtalRuta.value;
    console.log(svaret);

    /* Det är rätta årtalet */
    var årtalet = årtal[slumptal];

    /* Kolla om svaret är rätt */
    if (svaret == årtalet) {
        console.log("Yipee! Du har svarat rätt!");
        elementTummeUpp.style.display = "block";
        elementTummeNed.style.display = "none";
        poäng++;
    } else {
        console.log("Lol! Försök igen!");
        elementTummeNed.style.display = "block";
        elementTummeUpp.style.display = "none";
    }

    /* Skriv ut poäng */
    elementPoängRuta.value = poäng;

    /* Antal varv */
    varv--;
    if (varv == 0) {
        if (poäng == 10) {
            elementKontainer.innerHTML = "Grattis! Du kunde alla frågor.";
        } else {
            elementKontainer.innerHTML = "Loser! Försök igen!";
        }
    }
}