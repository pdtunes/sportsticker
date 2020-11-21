import { NFL_SCORE } from "./data/data.js";
import { NHL_SCORE } from "./data/data.js";
import { MLB_SCORE } from "./data/data.js";
import { getExistingFavs } from "./utils/getExistingFavs.js";



//NFL
(async function () {
  const nflContainer = document.querySelector(".nfl");
  const scoreURL = `${NFL_SCORE}`;
  const existingFavs = getExistingFavs();

  try {
    const nflScoreResponse = await fetch(scoreURL);
    const nflScore = await nflScoreResponse.json();


    for (let item in nflScore) {
      const hometeamname = nflScore[item].home.abbr;
      const awayteamname = nflScore[item].away.abbr;
      const hometeamscore = nflScore[item].home.score.T;
      const awayteamscore = nflScore[item].away.score.T;
      const stadium = nflScore[item].stadium;
      const quarter = nflScore[item].qtr;
      const clock = nflScore[item].clock;

      let cssClass = "far";

      const doesTeamExist = existingFavs.find((fav) => {
        return parseInt(fav.hometeamname) === nflScore.hometeamname;
      });

      if (doesTeamExist) {
        cssClass = "fa";
      }
    
      nflContainer.innerHTML += `

      <div class="card">
                <div class="card-body">
                <h5 class="card-title"><img class="homelogo" src="./assets/nfl/${hometeamname}.png"</img>${hometeamname} vs ${awayteamname} <img class="awaylogo" src="./assets/nfl/${awayteamname}.png" </img> </h5>
                <p class="card-text">Score: ${hometeamscore} - ${awayteamscore}</p>
                <p class="card-text">Stadium: ${stadium} </p>
                <p class="card-text">Quarter: ${quarter} </p>
                <p class="card-text">Clock: ${clock} </p>
                <i class="${cssClass} fa-heart"
                data-hometeamname="${hometeamname}"
                data-awayteamname="${awayteamname}"
                data-homelogo="${hometeamname}"
                data-awaylogo="${awayteamname}"
                data-hometeamscore="${hometeamscore}"
                data-awayteamscore="${awayteamscore}"
                data-clock="${clock}"
                data-quarter="${quarter}"
                data-stadium="${stadium}">
                </i>
            </div>
            </div>
            </div>
      `;
    }
  } catch (error) {
    error = ("Nothing here", error);
    console.log(error);
  }

  const favButton = document.querySelectorAll(".card-body > i");

  favButton.forEach((button) => {
    button.addEventListener("click", handleClick);
  });

  function handleClick(e) {
    this.classList.toggle("fa");
    this.classList.toggle("far");
    const hometeamname = e.target.dataset.hometeamname;
    const awayteamname = e.target.dataset.awayteamname;
    const homelogo = e.target.dataset.hometeamname;
    const awaylogo = e.target.dataset.awayteamname;
    const hometeamscore = e.target.dataset.hometeamscore;
    const awayteamscore = e.target.dataset.awayteamscore;
    const clock = e.target.dataset.clock;
    const quarter = e.target.dataset.quarter;
    const stadium = e.target.dataset.stadium;

    console.log(e.target.dataset.hometeamname);

    const existingFavs = getExistingFavs();

    const teamExists = existingFavs.find((fav) => {
      return fav.hometeamname === hometeamname;
    });

    if (teamExists === undefined) {
      const team = {
        hometeamname: hometeamname,
        awayteamname: awayteamname,
        homelogo: homelogo,
        awaylogo: awaylogo,
        hometeamscore: hometeamscore,
        awayteamscore: awayteamscore,
        clock: clock,
        quarter: quarter,
        stadium: stadium,
      };


      existingFavs.push(team);
      saveToFavs(existingFavs);
    } else {
      const newFavs = existingFavs.filter((fav) => fav.hometeamname !== nflScore.hometeamname);
      saveToFavs(newFavs);
    }
  }

  function saveToFavs(team) {
    console.log(team);
    localStorage.setItem("favorites", JSON.stringify(team));
  }
})();

//NHL

(async function () {
  const nhlContainer = document.querySelector(".nhl");
  const scoreURL = `${NHL_SCORE}`;

  try {
    const nhlScoreResponse = await fetch(scoreURL);
    const nhlScore = await nhlScoreResponse.json();

    nhlScore.games.forEach((match) => {


      const hometeamname = match.teams.home.abbreviation;
      const awayteamname = match.teams.away.abbreviation;
      const gameStatus = match.status.state;

      nhlContainer.innerHTML += `

      <div class="card">
                <div class="card-body">
                <h5 class="card-title"><img class="homelogo" src="./assets/nhl/${hometeamname}.png"</img>${hometeamname} vs ${awayteamname} <img class="awaylogo" src="./assets/nhl/${awayteamname}.png" </img> </h5>
                <p class="card-text">Score: ${match.scores[hometeamname]} - ${match.scores[awayteamname]}</p>
                <p class="card-text">Status: ${gameStatus}</p>
            </div>
            </div>
            </div>
      `;
    });
  } catch (error) {
    error = ("Nothing here", error);
    console.log(error);
  }
})();

//MLB

(async function () {
  const mlbContainer = document.querySelector(".mlb");
  const scoreURL = `${MLB_SCORE}`;

  try {
    const mlbScoreResponse = await fetch(scoreURL);
    const mlbScore = await mlbScoreResponse.json();

    mlbScore.dates.forEach((match) => {
      match.games.forEach((matchdates) => {
        console.log(matchdates);

        const hometeamname = matchdates.teams.home.team.name;
        const awayteamname = matchdates.teams.away.team.name;
        const hometeamscore = matchdates.teams.home.score;
        const awayteamscore = matchdates.teams.away.score;
        const gameStatus = matchdates.status.detailedState;
        const stadium = matchdates.venue.name;

        mlbContainer.innerHTML += `

      <div class="card">
                <div class="card-body">
                <h5 class="card-title"><img class="homelogo" src="./assets/mlb/${hometeamname}.png"</img>${hometeamname} vs ${awayteamname} <img class="awaylogo" src="./assets/mlb/${awayteamname}.png" </img> </h5>
                <p class="card-text">Score: ${hometeamscore} - ${awayteamscore}</p>
                <p class="card-text">Status: ${gameStatus}</p>
                <p class="card-text">Stadium: ${stadium}</p>
            </div>
            </div>
            </div>
      `;
      });
    });
  } catch (error) {
    error = ("Nothing here", error);
    console.log(error);
  }
})();


