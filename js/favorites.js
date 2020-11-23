import { getExistingFavs } from "./utils/getExistingFavs.js";

function favoriteList() {
  const favorites = getExistingFavs();
  const container = document.querySelector(".nfl");

  if (favorites.length === 0) {
    container.innerHTML = `<h2> You have no favorites? Go back and add some! </h2>`;
  }

  favorites.forEach((favorite) => {
    const result = +favorite.hometeamscore + +favorite.awayteamscore;
    console.log(favorite.hometeamscore);
    container.innerHTML += `
    <div class="card">
    <div class="card-body">
    <h2 class="card-title"><img class="homelogo" src="./assets/nfl/${favorite.hometeamname}.png"</img>${favorite.hometeamname} vs ${favorite.awayteamname} <img class="awaylogo" src="./assets/nfl/${favorite.awayteamname}.png" </img> </h5>
    <p class="card-text">Score: ${favorite.hometeamscore} - ${favorite.awayteamscore}</p>
    <p class="card-text">Stadium: ${favorite.stadium} </p>
    <p class="card-text">Quarter: ${favorite.quarter} </p>
    <p class="card-text">Clock: ${favorite.clock} </p>
    <p class="card-text">Total Poins: ${result} </p>

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
