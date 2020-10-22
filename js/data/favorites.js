import { getExistingFavs } from "./utils/getExistingFavs.js";
import createMenu from "./components/createMenu.js";
createMenu();

function favoriteList() {
  const favorites = getExistingFavs();
  const container = document.querySelector(".card-deck");

  if (favorites.length === 0) {
    container.innerHTML = `<h2> You have no favorites? Go back and add some! </h2>`;
  }

  favorites.forEach((favorite) => {
    console.log(favorite);
    container.innerHTML += `
      <div class="card-deck1">
          <div class="card-fav">
              <div class="card-body">
              <img class="card-img-top img-fluid" src="${favorite.logo}"alt="Card image cap">
              <div class="card-body">
              <h5 class="card-title">${favorite.name}</h5>
              <h6 class="card-title"> League: ${favorite.conference}</h6>
              <h6> Founded: ${favorite.founded}</h6>
              <p class="card-text">${favorite.about}</p>
              <h5>Superbowl champions: ${favorite.championships}</h5> 
              <i class="fa fa-heart"></i>
              </div>
          </div>
      </div>
          `;
  });
}

function clearButton() {
  const clearBtn = document.querySelector("#clear");

  clearBtn.addEventListener("click", clearList);

  function clearList() {
    if (confirm("Are you sure you want to clear the list?")) {
      localStorage.removeItem("favorites");
      favoriteList();
    }
  }
}

favoriteList();
clearButton();
