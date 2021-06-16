"use strict"
function PridetiDiv(){
   
    let masyvas = [6, 2, 4, 3, 0, 5];
    console.log(masyvas);
    for(let i = 0; i< masyvas.length; i++) {        

    let skaicius, skaitmuo;
        skaicius = masyvas[i];
    let indeksas = 0;
        
    while (skaicius != 0) {
        skaitmuo = skaicius % 10;
        indeksas = skaitmuo;
        
        skaicius = parseInt(skaicius / 10);
    }
        
    for (let i=0; i<1; i++) {

        let divElementas = document.createElement("div");
        divElementas.classList.add("elementasIndex");
        divElementas.innerText = "elementas - " + indeksas;

        document.querySelector(".talpykla").append(divElementas);
    }
    }
}