/* Kod som körs vid start */
/* Välja ut element vi ska jobba med */
const elementBild = document.querySelector("img");
var bildNr = 1;

/* Kod som körs efter start, när man klickar på en miniatyr */
function föreBild() {
    bildNr = bildNr - 1;
    if (bildNr == 0) {
        bildNr = 8;
    }
    elementBild.src = "./foton/foto" + bildNr + ".jpg";
}
function nästaBild() {
    bildNr = bildNr + 1;
    if (bildNr == 9) {
        bildNr = 1;
    }
    elementBild.src = "./foton/foto" + bildNr + ".jpg";
}
function play() {
    setInterval(nästaBild, 1000);
}