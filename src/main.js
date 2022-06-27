//import { example } from './data.js';

//import data from './data/pokemon/pokemon.js';

let containerPokemon = document.getElementById("containerPokemon");

let pokemon =fetch("./data/pokemon/pokemon.json")
.then(response => {
   return response.json();
})
.then(pokemon => console.log(pokemon));
 
let showPokemon = async()=>{
 for(let i =1; i<=pokemonNumber; i++){
    await pokemon(i); 
}
}
