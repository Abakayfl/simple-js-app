let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let list = $('.pokemon-list');
    let listItem = $('<li></li>');
    let button = $('<button>' + pokemon.name.toUpperCase() + '</button>');
    button.addClass('btn btn-outline-danger');
    button.attr('data-toggle', 'modal');
    button.attr('data-target', '#pokemonModal');
    listItem.append(button);
    list.append(listItem);

    button.on('click', function(event) {
      event.preventDefault();
      showDetails(pokemon);
    });
  }

  //This used to just display the pokemons details to the modal when clicked
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      showModal(pokemon)
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        json.results.forEach(function(item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//The functions below show the modal in the browser
function showModal(pokemon) {
  let modalBody = $('.modal-body');
  let modalTitle = $('.modal-title');

  modalTitle.empty(); //empties anything that was previously stored in these variables
  modalBody.empty();

  //add the new content into the new "modal" div (Name, height, and image content)
  //Name element
  let nameElement = $('<h1>' + pokemon.name.toUpperCase() + '</h1>');

  //Height content
  let heightElement = $('<p>' + 'Height: ' + pokemon.height + '</p>');

  //Image content
  let imageElement = $('<img class="modal-img" style="width:50%">');
  imageElement.attr('src', pokemon.imageUrl);

  //appends the children to their parent containers
  modalTitle.append(nameElement);
  modalBody.append(imageElement);
  modalBody.append(heightElement);
}

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

//This is a loop that displays the contents of the array to the browser
pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

