let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon 
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return pokemonList;
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
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });  
  }
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }
  function showDetails(item) {
    loadDetails(item).then(function() 
    {
      showModal(item);
    });
  }
  
  function showModal(item) {
    // Clear all existing modal content
    modalContainer.innerHTML = '';
    
    let modal = document.createElement('div');
    modal.classList.add('modal');
    
    // Add the new modal content
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);
    
    let nameElement = document.createElement('h1');
    nameElement.innerText = item.name;
    
    let heightElement = document.createElement('p');
    heightElement.innerText = 'Height: ' + item.height;

    let container = document.querySelector('#image-container');

    let myImage = document.createElement('img');
    myImage.src = item.imageUrl;

    
    modal.appendChild(closeButtonElement);
    modal.appendChild(nameElement);
    modal.appendChild(heightElement);
    modal.appendChild(myImage);
    modalContainer.appendChild(modal);
    
    
    modalContainer.classList.add('is-visible');
  }
  
  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }
  
  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('title', 'content');
  });
  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
  });
  
  modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal container,
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  function showModal(item) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $(".modal-header");

    modalTitle.empty();
    modalBody.empty();

    //creating element for name in modal content
    let nameElement = $("<h1>" + item.name + "</h1>");
    //creating img in modal content
    let imageElementFront = $('<img class="modal-img" style="width:50%">');
    imageElementFront.attr("src", item.imageUrl);
    let imageElementBack = $('<img class="modal-img" style="width:50%">');
    imageElementBack.attr("src", item.imageUrl);
    //creating element for height in modal content
    let heightElement = $("<p>" + "height: " + item.height + "</p>");
    //creating element for type in modal content
    // let typesElement = $("<p>" + "types: " + item.types + "</p>");

    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
    // modalBody.append(typesElement);
    
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
    hideModal: hideModal
  };
})();


pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);  
});
});


let modalContainer = document.querySelector('#modal-container');
  
  // REST OF CODE
  
  function showModal(item) {
    // Clear all existing modal content
    modalContainer.innerHTML = '';
    
    let modal = document.createElement('div');
    modal.classList.add('modal');
    
    // Add the new modal content
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);
    
    let titleElement = document.createElement('h1');
    titleElement.innerText = item.name;
    
    let contentElement = document.createElement('p');
    contentElement.innerText = item.height;
    
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);
    
    modalContainer.classList.add('is-visible');
  }
  
  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }
  
  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('hi');
  });
  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
  });
  
  modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal container,
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });






  









