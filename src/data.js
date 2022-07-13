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


export const filterPok = (data,types) =>{
   let addfilter = [];
   for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].type.length; j++) {
         if (data[i].type[j] == types) {
            addfilter.push(data[i]);            
         }
      }     
   }
}

