// Start


// Element vi använder
const elementKnapp = document.querySelector('knapp');
const elementVaraRuta = document.querySelector('#vara');
const elementPrisRuta = document.querySelector('#pris');
const elementLista1 = document.querySelector('lista1')
const elementLista1 = document.querySelector('lista2')


// Läsa av rutan vara och pris
elementKnapp.addEventListener('click', summera)

function summera() {
    // Läsa av Lista1 och Lista2
    var vara = elementVaraRuta.value
    var pris = elementPrisRuta.value

    // Addera vara och pris
    var summa1 = vara
    var summa2 = pris
    
    // Skriva ut summan i rutan
    elmentLista1.value = summa1;
    elementLista2.value = summa2;
}