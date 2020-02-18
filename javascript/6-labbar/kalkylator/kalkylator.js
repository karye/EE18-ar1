/* Element vi använder */
const elementFönster = document.querySelector("#fönster");
const elementKol4 = document.querySelector(".kol4");

/* Globala variabler */
var resultat = "",
    operation = "",
    minne = 0;

elementKol4.addEventListener("click", tryck);

function tryck(event) {
    if (event.target.tagName == "BUTTON") {
        console.log(event.target.textContent);

        switch (event.target.dataset.meta) {
            case "C":
                resultat = "";
                break;

            case "tal":
                if (operation) {
                    resultat = "";
                }
                resultat += event.target.textContent;
                break;

            case "+":
                minne = Number(resultat);
                operation = "+";
                break;
            case "-":
                minne = Number(resultat);
                operation = "-";
                break;
            case "*":
                minne = Number(resultat);
                operation = "*";
                break;
            case "/":
                minne = Number(resultat);
                operation = "/";
                break;
            case "=":
                operation = "";
                switch (operation) {
                    case "+":
                        resultat = minne + Number(resultat);
                        break;
                    case "-":
                        resultat = minne - Number(resultat);
                        break;
                    case "*":
                        resultat = minne * Number(resultat);
                        break;
                    case "/":
                        resultat = minne / Number(resultat);
                        break;
                }
                break;
        }

        elementFönster.value = resultat;
    }
}
