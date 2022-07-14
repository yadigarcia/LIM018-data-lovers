import { ordenarAscendente, ordenarDescendente, search, filterPok } from '../src/data.js';


describe("ordenarAscendente", () => {
  it('is a function', () => {
    expect(typeof ordenarAscendente).toBe('function');
  });

  it("ordenar ascendentmente", () => {
    let arrascen = [{name: "l"},{name: "a"}, {name: "o"}, {name: "b"}];
    let arrOrascen=[{name: "a"},{name: "b"}, {name: "l"}, {name: "o"}];
    expect(ordenarAscendente(arrascen)).toEqual(arrOrascen);
  });
});

describe("ordenarDescendente", () => {
  it('is a function', () => {
    expect(typeof ordenarDescendente).toBe('function');
  });

  it("ordenar descendentmente", () => {
    let arrdes = [{name: "l"},{name: "a"}, {name: "o"}, {name: "b"}];
    let arrOrdes=[{name: "o"},{name: "l"}, {name: "b"}, {name: "a"}];
    expect(ordenarDescendente(arrdes)).toEqual(arrOrdes);
  });
});

describe('search', () => {
   it('is a function', () => {
     expect(typeof search).toBe('function');
   });


   it('buscar coincidencia por nombre o numero', () => {
    let nom = [{"name": "ana"},{"name": "yadira"}, {"name": "leyla"}, {"name": "olga"}];
    let buscarnom = [{"name": "olga"}];

     expect(search(nom, "olga")).toEqual(buscarnom);

  
 });

 });

 describe('filterPok', () => {
  it('is a function', () => {
    expect(typeof filterPok).toBe('function');
  });


  it('buscar coincidencia por nombre o numero', () => {
   let pokemonTest = [{"name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
      ]},
      {
        "num": "099",
        "name": "kingler",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        
        },
        "pokemon-rarity": "normal",
        "type": [
          "water"
        ]}]
    
   let pokemonTest2 = [{"name": "bulbasaur",
   "generation": {
     "num": "generation i",
     "name": "kanto"
   },
   "pokemon-rarity": "normal",
   "type": [
     "grass",
     "poison"
     ]}];

    expect(filterPok(pokemonTest, "poison")).toEqual(pokemonTest2);

 
});

});