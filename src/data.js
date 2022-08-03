// ordenar pokemon

export const ordenarAscendente = (data) => {

  function sortPokemon(x, y){
    if(x.name < y.name){
       return -1;
    }
    if(x.name > y.name){
       return 1;
    }
 }
  return data.sort(sortPokemon);
};

export const anotherExample = () => {
  return 'OMG';
};

export const ordenarDescendente = (data) => {
  function sortDesPokemon(x,y){
    if(x.name < y.name){
       return 1;
    }
    if(x.name > y.name){
       return -1;
    }
 }
 return data.sort(sortDesPokemon);
};


// buscar pokemon

export const search = (data, enter) => {
   function igual(x){
      if( enter === x.name || enter === x.num){
         return x;
      }
     
   }
  return data.filter(igual);
 
}

export const filterPok = (data,typePok) =>{ 
   function filterPokType(y) {
      
      if(typePok == y.type[0] || typePok== y.type[1] || typePok== y.type[2])
      return y; 
   }
   return data.filter(filterPokType);
}

// estdistadistica de pokemones  

// let sumPoke=0;
// function sumar(data) {
//   sumpoke +=filterPok
 

//    console.log(sumar);
     
// }


