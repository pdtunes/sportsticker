import { NFL_SCORE } from "./data/data.js";

/* import { MLB_API } from "./data/data.js"; */

//NFL

(async function () {
  const nflContainer = document.querySelector(".nfl");
  const scoreURL = `${NFL_SCORE}`;

  try {
    const nflScoreResponse = await fetch(scoreURL);
    const nflScore = await nflScoreResponse.json();

    nflContainer.innerHTML = "<h1>NFL</h1>";

    for (let item in nflScore) {
      console.log(nflScore);
      const hometeamName = nflScore[item].home.abbr;
      // <img src="${hometeamName}.jpg" /> chi.jpg chi.png
      // <img src="${awayteamName}.jpg" /> chicago
      const awayteamName = nflScore[item].away.abbr;
      const hometeam = nflScore[item].home.score.T;
      const awayteam = nflScore[item].away.score.T;
      const stadium = nflScore[item].stadium;
      const quarter = nflScore[item].qtr;
      const clock = nflScore[item].clock;

      nflContainer.innerHTML += `
      <div class=".card-deck">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title"><img class="homelogo" src="./assets/nfl/${hometeamName}.png"</img>${hometeamName} vs ${awayteamName} <img class="awaylogo" src="./assets/nfl/${awayteamName}.png" </img> </h5>
                <p class="card-text">Score: ${hometeam} - ${awayteam}</p>
                <p class="card-text">Stadium: ${stadium} </p>
                <p class="card-text">Quarter: ${quarter} </p>
                <p class="card-text">Clock: ${clock} </p>
               
                </div>
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

/* //MLB

(async function () {
  const mlbContainer = document.querySelector(".mlb");
  const mlbURL = `${MLB_API}`;

  try {
    const mlbResponse = await fetch(mlbURL);
    const mlb = await mlbResponse.json();

    mlbContainer.innerHTML = " <h1>MLB</h1>";

    mlb.events.forEach(mlbEvent => {
      mlbEvent.competitions.forEach(mlbCompetition => {
        const [mlbHomeTeam, mlbAwayTeam] = mlbCompetition.competitors;
        mlbContainer.innerHTML += `
        <div class="card-deck">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title"> ${mlbAwayTeam.team.location} ${mlbAwayTeam.team.name} <img class="logo" src=" ${mlbAwayTeam.team.logo}"> @ ${mlbHomeTeam.team.location} ${mlbHomeTeam.team.name} <img class="logo" src=" ${mlbHomeTeam.team.logo}">  </h5>
                <p class="card-text"> Inning: ${mlbEvent.status.period} || Game status: ${mlbEvent.status.type.description}</p>
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
})(); */
