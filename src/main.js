//import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
import {ordenarDescendente,ordenarAscendente, search, filterPok, estadistic} from "./data.js";
//import pokemon from './data/pokemon/pokemon.js';

let containerPokemon = document.getElementById("containerPokemon");
let ordenAscend = document.getElementById("ordenAscend");
let ordenDescen = document.getElementById("ordenDescen");
let searchPokemon = document.getElementById("searchPokemon");
let btnSearch = document.getElementById("btnSearch");
let filtrarPokemonesBtn = document.getElementById("filtrarPokemonesBtn");
let submenu= document.getElementById("submenu");
let btnRefresh = document.getElementById("btnRefresh");

//visualizacion de pantallas div//
let inicioPantalla = document.getElementById("inicioPantalla");
let pokedexPantalla = document.getElementById("pokedexPantalla");
let jugarPantalla =document.getElementById("jugarPantalla");
let acercadePantalla = document.getElementById("acercadePantalla");

//botones para cambiar ventanas del header//
let btnInicio = document.getElementById("btnInicio");
let btnPokedex = document.getElementById("btnPokedex");
let btnInicioJugar = document.getElementById("btnInicioJugar");
let btnAcercade = document.getElementById("btnAcercade");  
      

btnInicio.addEventListener("click", e => {
   e.preventDefault();
   inicioPantalla.style.display = "block";
   pokedexPantalla.style.display = "none";
   jugarPantalla.style.display = "none";
   acercadePantalla.style.display  = "none";
});

btnPokedex.addEventListener("click", e => {
   e.preventDefault();
   inicioPantalla.style.display = "none";
   pokedexPantalla.style.display = "block";
   jugarPantalla.style.display = "none";
   acercadePantalla.style.display  = "none";
});

btnInicioJugar.addEventListener("click", e => {
   e.preventDefault();
   inicioPantalla.style.display = "none";
   pokedexPantalla.style.display = "none";
   jugarPantalla.style.display = "block";
   acercadePantalla.style.display  = "none";
});

btnAcercade.addEventListener("click", e => {
   e.preventDefault();
   inicioPantalla.style.display = "none";
   pokedexPantalla.style.display = "none";
   jugarPantalla.style.display = "none";
   acercadePantalla.style.display = "block";
});


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


   card.appendChild(imgContent);
   card.appendChild(number);
   card.appendChild(name);
   card.appendChild(divType);

   containerPokemon.appendChild(card);
}
 

//Ordenar pokemon
ordenAscend.addEventListener("click", e =>{
   e.preventDefault();
  
   let ordAsc = ordenarAscendente(data.pokemon); 

   containerPokemon.innerHTML = '';
   
   for(let i=0; i< ordAsc.length; i++ ){
      createPokeCard(ordAsc[i]);
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

   let pok= search(data.pokemon, searchPokemon.value.toLowerCase());
     
    for(let i=0; i< pok.length; i++ ){
       createPokeCard(pok[i]);
    } 
  
});

//aparezca el listado por tipo

filtrarPokemonesBtn.addEventListener("click", function(){
  submenu.classList.toggle("show");
});

submenu.addEventListener("change", e => {
   e.preventDefault();
   containerPokemon.innerHTML = '';
  let pokemonValue = e.target.value;

   let showFilterPok= filterPok(data.pokemon, pokemonValue);
     for(let i=0; i< showFilterPok.length; i++ ){
         createPokeCard(showFilterPok[i]);
      }
   
   // alert(estadistic(data.pokemon.length, showFilterPok.length));
   document.getElementById("messageEstadistic").textContent="Este tipo de pokemon tiene un porcentaje de " + estadistic(data.pokemon.length, showFilterPok.length).toFixed(2) +"%";

});

btnRefresh.addEventListener("click", e=>{
   e.preventDefault(),

   containerPokemon.innerHTML="";

   for(let i=0; i< data.pokemon.length; i++ ){
      createPokeCard(data.pokemon[i]);
   }
});
    