//import { example } from './data.js';

import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
import {ordenarAscendente} from "./data.js";
import {ordenarDescendente} from "./data.js";

let containerPokemon = document.getElementById("containerPokemon");
let btnBuscar = document.getElementById("btnBuscar");
let ordenAscend = document.getElementById("ordenAscend");
let ordenDescen = document.getElementById("ordenDescen");


// creartePokemon(data.pokemon[0]);  (referencia)
// let pokemon =fetch("./data/pokemon/pokemon.json")
// .then(response => {
//    return response.json();
// })
// .then(pokemon => console.log(pokemon.pokemon[0]));
 
// let showPokemon = async()=>{
//  for(let i =1; i<=pokemonNumber; i++){
//     await pokemon(i); 
// }

for(let i=0; i< data.pokemon.length; i++ ){
   createPokeCard(data.pokemon[i]);
}

function createPokeCard (pokemon){
   let card=document.createElement("div");
   card.classList.add("card-pokemon");

   let imgContent = document.createElement("div");
   imgContent.classList.add("img-content");

   let imgPokemon = document.createElement("img");
   imgPokemon.src = pokemon.img;
   
 
   imgContent.appendChild(imgPokemon);

   let number = document.createElement("p");
   number.classList.add("numberPokemon");
   number.textContent = "#" + pokemon.num;

   let name = document.createElement("p");
   name.classList.add("namePokemon");
   name.textContent = pokemon.name
   
   let type = document.createElement("p");
   type.classList.add("typePokemon");
   type.textContent = pokemon.type;

   card.appendChild(imgContent);
   card.appendChild(number);
   card.appendChild(name);
   card.appendChild(type);

   containerPokemon.appendChild(card);
}
ordenAscend.addEventListener("click", e =>{
   e.preventDefault();
   
  
   let ord = ordenarAscendente(data.pokemon); 

   document.getElementById('containerPokemon').innerHTML = '';
   
   for(let i=0; i< ord.length; i++ ){
      createPokeCard(ord[i]);
   } 

})
ordenDescen.addEventListener("click", e =>{
   e.preventDefault();

   
   let ordDes = ordenarDescendente(data.pokemon);
   document.getElementById('containerPokemon').innerHTML = '';

   for(let i=0; i< ordDes.length; i++ ){
      createPokeCard(ordDes[i]);
   } 

})
btnBuscar.addEventListener("click", e => {
   e.preventDefault();
   let pokemonBuscar = document.getElementById("pokemonBuscar").value.toLowerCase();
   document.getElementById('containerPokemon').innerHTML = '';
   
   let pokemonBuscado = data.pokemon.filter(x => x.name === pokemonBuscar || x.num === pokemonBuscar);
  

   for(let i=0; i< pokemonBuscado.length; i++ ){
      createPokeCard(pokemonBuscado[i]);
   } 
   
 
   



   
})

