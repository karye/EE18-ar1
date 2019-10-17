window.onload = start;

function start() {
    const eNamn = document.querySelector("h1");
    eNamn.addEventListener("click", animera);

    function animera() {
        window.animatelo.bounce("h1");
    }
}