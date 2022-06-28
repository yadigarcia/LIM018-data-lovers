//import { example } from './data.js';

import data from './data/pokemon/pokemon.js';

let containerPokemon = document.getElementById("containerPokemon");

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
// function createPokemon(pokemon){
//    console.log(pokemon.name)

// }

function createPokeCard (pokemon){
   let card=document.createElement("div");
   card.classList.add("card-pokemon");

   let imgContent = document.createElement("div");
   imgContent.classList.add("img-content");

   let imgPokemon = document.createElement("img");
   imgPokemon.src = pokemon.img;
   
 
   imgContent.appendChild(imgPokemon);

   let number = document.createElement("p");
   number.textContent = pokemon.num;

   let name = document.createElement("p");
   name.classList.add("namePokemon");
   name.textContent = pokemon.name

   card.appendChild(imgContent);
   card.appendChild(number);
   card.appendChild(name);

   containerPokemon.appendChild(card);
   
}
