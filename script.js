console.log("Hallo, ich bin Wilhelmine.")
const katze = document.querySelector(".tiger");
const herz = documen.querySelector(".herz");
const zaehler= document.querySelector(".zaehler");

let anzahl =0;

function aktualisiereAnzahl (){
    document.querySelector(".zaehler").textContent = anzahl;
}
aktualisiereAnzahl

function miau() {
    new Audio ("cat-purr-6164.mp3")
}

function zeigeHerz() {
    console.log("zeigeHerz");
    herz.style.display = "block";
    aktualisiereAnzahl
}

function verschwindeHerz(e) {
    console.log("verschwindeHerz");
    e.stopProgation();
    herz.style.display= "none";
}
tiger.addEventListener("click", zeigeHerz);
herz.addEventListener("click", verschwindeHerz);

cosnt besen = docment.querySelector(".besen");

function bewegeBesen() {
    const rect = besen.getBoundingClientRect();
    console.log(rect);
    besen.style.left = `$(rect.left + 10)px`;
}