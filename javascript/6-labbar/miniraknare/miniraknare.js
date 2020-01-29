/* Element vi använder */
const elementRutaTal1 = document.querySelector("#tal1");
const elementRutaTal2 = document.querySelector("#tal2");
const elementKnappPlus = document.querySelector("#plus");
const elementKnappMinus = document.querySelector("#minus");
const elementKnappGånger = document.querySelector("#gånger");
const elementKnappDividera = document.querySelector("#dividera");
const elementRutaResultat = document.querySelector("#resultat");

/* Lyssna på om man klickar på + knappen */
elementKnappPlus.addEventListener("click", summera);
function summera() {
    /* Läs av tal1 & tal2 */
    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value);

    /* Räkna ut tal1 + tal2 */
    var resultat = tal1 + tal2;

    /* Skriver ut svaret i resultatrutan */
    elementRutaResultat.value = resultat;
}
elementKnappMinus.addEventListener("click", subtrahera);
function subtrahera() {
    /* Läs av tal1 & tal2 */
    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value);

    /* Räkna ut tal1 - tal2 */
    var resultat = tal1 - tal2;

    /* Skriver ut svaret i resultatrutan */
    elementRutaResultat.value = resultat;
}
elementKnappGånger.addEventListener("click", multiplikation);
function multiplikation() {
    /* Läs av tal1 & tal2 */
    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value);

    /* Räkna ut tal1 * tal2 */
    var resultat = tal1 * tal2;

    /* Skriver ut svaret i resultatrutan */
    elementRutaResultat.value = resultat;
}
elementKnappDividera.addEventListener("click", division);
function division() {
    /* Läs av tal1 & tal2 */
    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value);

    /* Räkna ut tal1 / tal2 */
    var resultat = tal1 / tal2;

    /* Skriver ut svaret i resultatrutan */
    elementRutaResultat.value = resultat;
}