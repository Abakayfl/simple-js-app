let pokemonRepository = (function () {

let pokemonList = [
{
  name: "Bulbasaur", 
  height: 0.7, 
  abilities: ["grass", "poison"]
},
{
  name: "Pikachu", 
  height: 0.4, 
  abilities: ["static","lightningrod"]
},
{
  name: "Squirtle", 
  height: 0.5, 
  abilities: ["rain-dish", "torrent"]
}
];

  function add(pokemon) {
    pokemonList.push(pokemon);
}

  function getAll() {
    return pokemonList;
}

  return {
    add: add,
    getAll: getAll
};
})();


  pokemonList.forEach(function(pokemon) {
  //Pick the pokemon name and height if height is greater than 0.6 then write this statement "-Wow, that's big"
  if (pokemonList.height >0.6){
    document.write(pokemonList.name + " (" + "height: " + pokemonList.height + ")" + " - Wow, that's big!" + "<br>"); 
  }
  //if the pokemon height is less than 0.6 then write this statement "is a pokemon"
  else{
    document.write(pokemonList.name + " (" + "height: " + pokemonList.height + ")" + " is a pokemon " + "<br>"); 
  }
});


//   for (let i=0; i < pokemonList.length; i++) {
//   //Pick the pokemon name and height if height is greater than 0.6 then write this statement "-Wow, that's big"
//   if (pokemonList[i].height >0.6){
//     document.write(pokemonList[i].name + " (" + "height: " + pokemonList[i].height + ")" + " - Wow, that's big!" + "<br>"); 
//   }
//   //if the pokemon height is less than 0.6 then write this statement "is a pokemon"
//   else{
//     document.write(pokemonList[i].name + " (" + "height: " + pokemonList[i].height + ")" + " is a pokemon " + "<br>"); 
//   }
// }




