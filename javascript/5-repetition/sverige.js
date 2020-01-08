/* Start */
const elementInput = document.querySelector("input");
const elementKnapp = document.querySelector("button");
const elementOutput = document.querySelector("textarea");

/* Läs av ålder */
elementKnapp.addEventListener("click", åldersKoll);

/* Kolla upp åldergräns */
function åldersKoll() {
    /* Läs av ålder */
    var ålder = elementInput.value;
    console.log(ålder);
    
    /* Kolla upp åldergräns */
    if (ålder < 6) {
        /* Skriv ut svaret */
        elementOutput.value = "Från och med att du är 1 år har du rätt att gå i förskola. Förskolan är frivillig. Det är föräldrarna som bestämmer om ett barn ska gå i förskola.";
    }
    if (ålder == 6) {
        /* Skriv ut svaret */
        elementOutput.value = "Du ska börja i förskoleklass från och med höstterminen det år du fyller sex år. Skolplikten börjar då. Det betyder att du måste gå i skolan.";
    }
    if (ålder < 11) {
        /* Skriv ut svaret */
        elementOutput.value = "Du får se biofilmer som har en åldersgräns från 7 år.";
    }
    if (ålder == 11) {
        /* Skriv ut svaret */
        elementOutput.value = "Du får se biofilmer som har en åldersgräns från 11 år.";
    }
    if (ålder == 12) {
        /* Skriv ut svaret */
        elementOutput.value = "Om dina föräldrar vill att du ska byta efternamn måste du först godkänna det. Om du fyllt tolv år får du inte adopteras utan att du själv går med på adoptionen. Men även innan du fyllt tolv har du rätt att säga vad du tycker.";
    }
    if (ålder < 15) {
        /* Skriv ut svaret */
        elementOutput.value = "Om du har fyllt 13 år, får du utföra lättare arbete som inte är skadligt för din hälsa, utveckling eller skolgång. Om du är under 13 år får du inte arbeta. Men även här finns vissa undantag.";
    }
    /* Kolla upp åldergräns */
    if (ålder == 15) {
        /* Skriv ut svaret */
        elementOutput.value = "Du blir straffmyndig. Det betyder att du kan straffas för ett brott. Du får köra moped (klass 1). Du får se barnförbjudna filmer på bio. Om din cykel eller moped har lämpliga säten, får du skjutsa en person. Personen måste vara yngre än 10 år. Sex: Lagen säger att man i princip inte får ha sex med någon som är under 15 år. Men lagen är inte till för att förbjuda två som är lika gamla eller ungefär lika gamla från att ha sex med varandra utan för att förhindra att en äldre person utnyttjar någon som är yngre.";
    }
    if (ålder < 18) {
        /* Skriv ut svaret */
        elementOutput.value = "Skolplikten upphör när du gått ut nionde klass. Du får ta ett normalt, riskfritt arbete, det vill säga jobba 40 timmar i veckan. Men arbetsgivaren har lite mer ansvar för dig som inte är myndig än för dina myndiga arbetskamrater. Du får starta egen firma. Du får själv bestämma över de pengar du tjänar. Du får ta körkort för lätt motorcykel och traktor. Du får börja övningsköra bil. Du får anmäla flyttning och skriva under din anmälan själv. Dina föräldrar får inte längre barnbidrag för dig. Nu får du istället studiebidrag om du studerar.";
    }
    if (ålder >= 18) {
        /* Skriv ut svaret */
        elementOutput.value = "Du blir myndig. Du får gifta dig. Du får rösta. Du får köpa cigaretter. Du får köpa alkohol på restaurang och öl i affärer. Du får ta körkort.";
    }
}

