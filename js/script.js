let pokemonRepository = (function () {
  let repository = [
    {
      name: "Bulbasaur", 
      height: 0.7, 
      abilities: ["grass", "poison"],
    },
    {
      name: "Pikachu", 
      height: 0.4, 
      abilities: ["static","lightningrod"],
    },
    {
      name: "Squirtle", 
      height: 0.5, 
      abilities: ["rain-dish", "torrent"],
    }
  ];
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "abilities" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return repository;
  }
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");

    button.addEventListener('click', function(event) {
      console.log(pokemon.name); 
    });

    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);  
  }

  function showDetails(pokemon) {
    console.log(pokemon.name);

  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
  };
})();

pokemonRepository.add({ name: "Charizard", height: 1.7, abilities: ["fire", "flying"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {

  pokemonRepository.addListItem(pokemon);
  
});










