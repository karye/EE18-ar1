/* Element vi jobbar med */
const elementAntal = document.querySelector("#antal");
const elementFrukt = document.querySelector("#frukt");
const elementSkicka = document.querySelector("#skicka");
const elementRadera = document.querySelector("#radera");
const elementOutput = document.querySelector("#output");
const elementFel = document.querySelector("#fel");

/* Vad händer när man klickar på knappen Skicka */
elementSkicka.addEventListener("click", function() {
    var antal = elementAntal.value;
    var frukt = elementFrukt.value;

    if (frukt == "") {
        elementFel.innerHTML = "Välj en frukt!";
        frukt = "äpplen";
    } else if (frukt != "äpplen") {
        elementFel.innerHTML = "Välj äpplen istället för " + frukt + ", det är bäst för din hälsa!";
        frukt = "äpplen";
    }

    if (antal < 1) {
        antal = "ett";
    }
    if (antal == 1) {
        antal = "ett";
    }
    if (antal == 2) {
        antal = "två";
    }
    if (antal > 2) {
        antal = "två";
    }

    elementOutput.innerHTML = "Doktorn säger: <strong>" + antal + " " + frukt + "</strong> om dagen håller honom borta!";
});

/* Vad händer när man klickar på knappen Radera */
elementRadera.addEventListener("click", function() {
    elementAntal.value = "";
    elementFrukt.value = "";
    elementOutput.textContent = "";
    elementFel.textContent = "Inga fel!";
});