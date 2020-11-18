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
  function getAll() {
    return pokemonList;
  }
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "abilities" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");  
    }
  }
  return {
    getAll: getAll,
    add: add
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {

  // console.log(pokemon)

  if (pokemon.height > 0.6){

     document.write(pokemon.name + " (" + "height: " + pokemon.height + ")" + " - Wow, that's big!" + "<br>"); 
  }
   //if the pokemon height is less than 0.6 then write this statement "is a pokemon"
  else{
     document.write(pokemon.name + " (" + "height: " + pokemon.height + ")" + " is a pokemon " + "<br>"); 
  }
});








