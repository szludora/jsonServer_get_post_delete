"use strict";
import {postAdatok, deleteAdatok, getAdatok } from "./vegpontHivasok.js";

$(function(){
    let vegpont=`https://pokeapi.co/api/v2/pokemon/3`;
    getAdatok(vegpont, pokemonMegjelenit)

    let sajatVegpont="http://localhost:3000/adatLista"
    getAdatok(sajatVegpont, sajatMegjelenito)

    $("#torol").on("click", function(){deleteAdatok(sajatVegpont, 4)})
    $("#ujelem").on("click", function(){
        const ujAdat= {
            "nev": "Cirmi",
            "kor": "5",
            "fajta": "macska"
        }
        postAdatok(sajatVegpont, ujAdat)
    })

});

function pokemonMegjelenit(data){
    let kep = data.sprites.front_default
    let nev = data.name
    $("main").append(`<div class="${nev}"><img src="${kep}" alt="${data.name}"></div>`)
    $(`.${nev}`).append(`${nev}`)

}

function sajatMegjelenito(data){
    console.log(data)
}