"use strict"

function sakniesTraukimas(){

let zingsniai = 0;


for (let i=0; i<40; i++) {

    let divElementas = document.createElement("div");
    divElementas.classList.add("div-dydis");
    divElementas.innerText = i + 1; // +1 todel kad numeruotų ne nuo 0 o nuo 1


    if( (i+1) % 2 == 0 ) {
        divElementas.classList.add("zalias");
    }

    document.querySelector(".conteiner").append(divElementas);

    console.log(i);
    zingsniai++;
    
}
}