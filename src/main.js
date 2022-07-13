//import { example } from './data.js';

//import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
import {ordenarDescendente,ordenarAscendente, search} from "./data.js";
//import pokemon from './data/pokemon/pokemon.js';

let containerPokemon = document.getElementById("containerPokemon");
let ordenAscend = document.getElementById("ordenAscend");
let ordenDescen = document.getElementById("ordenDescen");
let searchPokemon = document.getElementById("searchPokemon");
let btnSearch = document.getElementById("btnSearch");
let filtrarPokemonesBtn = document.getElementById("filtrarPokemonesBtn");
let submenu= document.getElementById("submenu");
//let filtertype = document.getElementById("filtertype");

//  const typecolors = {
//     electric: "#ffa300",
//     normal: "#4b1c71",
//     fire: "#ff0534",
//     water: "#039BE5",
//     ice: "#BBDEFB",
//     rock: "#9E9E9E",
//     flying: "#a2c0da",
//     grass: "#7CB342",
//     psychic: "#f8de7e",
//     ghost: "#d0ccd1",
//     bug: "#9E9D24",
//     poison: "#6f3460",
//     ground: "#73400d",
//     dragon: "#EF6C00",
//     steel: "#4e5452",
//     fighting: "#62152d",
//     default: "0a0a0a",

//  }

//mostrar pokemon
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
   
   let divType = document.createElement("div");
   divType.classList.add("typePokemon");
   divType.textContent = pokemon.type;


   // let divType = document.createElement("div");
   // divType.classList.add("typePokemon");
   // let TypeElem = pokemon.type.forEach(elemt=> elemt);     
   // divType.innerHTML = TypeElem;


   card.appendChild(imgContent);
   card.appendChild(number);
   card.appendChild(name);
   card.appendChild(divType);

   containerPokemon.appendChild(card);
}
 
   // const typecolors = {
   //    electric: "#F1C40F",
   //    normal:"·B09398",
   //    fire: "#D32F2F",
   //    water: "#039BE5",
   //    ice:"#AFEAFD",
   //    rock: "#9E9E9E",
   //    flying: "#7AE7C7",
   //    grass: "#7CB342",
   //    psychic:"#FFC6D9",
   //    ghost:"#561D25",
   //    bug:"#A2FAA3",
   //    poison: "#795663",
   //    ground:"#D2B074",
   //    dragon:"#DA627D",
   //    steel:"#1D8A99",
   //    fighting:"#2F2F2F",
   //    default:"#2A1A1F",
   // }
   

//Ordenar pokemon
ordenAscend.addEventListener("click", e =>{
   e.preventDefault();
  
   let ord = ordenarAscendente(data.pokemon); 

   containerPokemon.innerHTML = '';
   
   for(let i=0; i< ord.length; i++ ){
      createPokeCard(ord[i]);
   } 

})

ordenDescen.addEventListener("click", e =>{
   e.preventDefault();

   let ordDes = ordenarDescendente(data.pokemon);
   containerPokemon.innerHTML = '';

   for(let i=0; i< ordDes.length; i++ ){
      createPokeCard(ordDes[i]);
   } 

})


//Buscar pokemon
btnSearch.addEventListener("click", e =>{
   e.preventDefault();
   containerPokemon.innerHTML = '';

   let pok= search(data.pokemon, searchPokemon.value);
     
    for(let i=0; i< pok.length; i++ ){
       createPokeCard(pok[i]);
    } 
  
});

//aparezca el lstado por tipo

filtrarPokemonesBtn.addEventListener("click", function(){
  submenu.classList.toggle("show");
});

// filtar pokemones

// let pokeElectric= document.getElementById("electrico");

// pokeElectric.addEventListener("click", e=>{
//    e.preventDefault();
//    let showFilterPok = filterPok(data.pokemon, filtertype.value)
   

// });
submenu.addEventListener("click", e => {
   e.preventDefault();

   //let searchFilter=e.filtertype.value;

  alert("hola");

})
    


