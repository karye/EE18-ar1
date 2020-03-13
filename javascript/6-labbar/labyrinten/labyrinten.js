/* Element vi jobbar med */
const elementNamn = document.querySelector("#namn");
const elementVerb = document.querySelector("#verb");
const elementKnapp = document.querySelector("button");
const elementOutput = document.querySelector("#output");
const elementPoäng = document.querySelector("#poäng");

var rum = "entrén";
var poäng = 0;
elementOutput.innerHTML += "Du är i " + rum + ".<br>";

/* Vad händer när vi klickar på Gå */
elementKnapp.addEventListener("click", function() {
    /* Läs av input-rutorna */
    var namn = elementNamn.value;
    var verb = elementVerb.value;

    /* Vad vill man göra? */
    if (rum == "entrén") {
        if (verb == "fram") {
            rum = "kafeterian";
            elementOutput.innerHTML += "Du är i " + rum + ".<br>";
        } else if (verb == "höger") {
            rum = "biblioteket";
            elementOutput.innerHTML += "Du är i " + rum + ".<br>";
        } else if (verb == "vänster") {
            rum = "rum 1";
            elementOutput.innerHTML += "Du är i " + rum + ".<br>";
        }
    } else if (rum == "kafeterian") {
        if (verb == "tillbaka") {
            rum = "entrén";
            elementOutput.innerHTML += "Du är i " + rum + ".<br>";
        }
    } else if (rum == "biblioteket") {
        if (verb == "tillbaka") {
            rum = "entrén";
            elementOutput.innerHTML += "Du är i " + rum + ".<br>";
        } else if (verb == "plocka") {
            poäng++;
            elementOutput.innerHTML += "Du hittade ett guldmynt.<br>";
            elementPoäng.textContent = poäng;
        }
    } else if (rum = "rum 1") {
        if (verb == "tillbaka") {
            rum = "entrén";
            elementOutput.innerHTML += "Du är i " + rum + ".<br>";
        } else if (rum == "rum 2") {
            rum = "rum 2";
            elementOutput.innerHTML += "Du är i " + rum + ".<br>";
        }
    }
})