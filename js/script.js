import { NFL_SCORE } from "./data/data.js";
import { NHL_SCORE } from "./data/data.js";
import { MLB_SCORE } from "./data/data.js"

/* //NFL
(async function () {
  const nflContainer = document.querySelector(".nfl");
  const scoreURL = `${NFL_SCORE}`;

  try {
    const nflScoreResponse = await fetch(scoreURL);
    const nflScore = await nflScoreResponse.json();

    for (let item in nflScore) {
      const hometeamName = nflScore[item].home.abbr;
      const awayteamName = nflScore[item].away.abbr;
      const hometeamScore = nflScore[item].home.score.T;
      const awayteamScore = nflScore[item].away.score.T;
      const stadium = nflScore[item].stadium;
      const quarter = nflScore[item].qtr;
      const clock = nflScore[item].clock;

      nflContainer.innerHTML += `

      <div class="card">
                <div class="card-body">
                <h5 class="card-title"><img class="homelogo" src="./assets/nfl/${hometeamName}.png"</img>${hometeamName} vs ${awayteamName} <img class="awaylogo" src="./assets/nfl/${awayteamName}.png" </img> </h5>
                <p class="card-text">Score: ${hometeamScore} - ${awayteamScore}</p>
                <p class="card-text">Stadium: ${stadium} </p>
                <p class="card-text">Quarter: ${quarter} </p>
                <p class="card-text">Clock: ${clock} </p>
            </div>
            </div>
            </div>
      `;
    }
  } catch (error) {
    error = ("Nothing here", error);
    console.log(error);
  }
})();

//NHL

(async function () {
  const nhlContainer = document.querySelector(".nhl");
  const scoreURL = `${NHL_SCORE}`;

  try {
    const nhlScoreResponse = await fetch(scoreURL);
    const nhlScore = await nhlScoreResponse.json();


    nhlScore.games.forEach(match => {
      console.log(match);
      
      const hometeamName = match.teams.home.abbreviation;
      const awayteamName = match.teams.away.abbreviation;
      const gameStatus = match.status.state;
      

      nhlContainer.innerHTML += `

      <div class="card">
                <div class="card-body">
                <h5 class="card-title"><img class="homelogo" src="./assets/nhl/${hometeamName}.png"</img>${hometeamName} vs ${awayteamName} <img class="awaylogo" src="./assets/nhl/${awayteamName}.png" </img> </h5>
                <p class="card-text">Score: ${match.scores[hometeamName]} - ${match.scores[awayteamName]}</p>
                <p class="card-text">Status: ${gameStatus}</p>
            </div>
            </div>
            </div>
      `;
    })
  } catch (error) {
    error = ("Nothing here", error);
    console.log(error);
  }
})(); */


//MLB

(async function () {
  const mlbContainer = document.querySelector(".nhl");
  const scoreURL = `${MLB_SCORE}`;

  try {
    const mlbScoreResponse = await fetch(scoreURL);
    const mlbScore = await mlbScoreResponse.json();
console.log(mlbScore);

    mlbScore.games.forEach(match => {
      console.log(match);
      
      const hometeamName = match.teams.home.abbreviation;
      const awayteamName = match.teams.away.abbreviation;
      const gameStatus = match.status.state;
      

      mlbContainer.innerHTML += `

      <div class="card">
                <div class="card-body">
                <h5 class="card-title"><img class="homelogo" src="./assets/mlb/${hometeamName}.png"</img>${hometeamName} vs ${awayteamName} <img class="awaylogo" src="./assets/mlb/${awayteamName}.png" </img> </h5>
                <p class="card-text">Score: ${match.scores[hometeamName]} - ${match.scores[awayteamName]}</p>
                <p class="card-text">Status: ${gameStatus}</p>
            </div>
            </div>
            </div>
      `;
    })
  } catch (error) {
    error = ("Nothing here", error);
    console.log(error);
  }
})();