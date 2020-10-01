import { NFL_API } from "./data/data.js";
import { MLB_API } from "./data/data.js";


(async function () {
  const nflContainer = document.querySelector(".nfl");
  const nflURL = `${NFL_API}`;

  try {
    const nflResponse = await fetch(nflURL);
    const nfl = await nflResponse.json();

    nflContainer.innerHTML = " <h1>NFL</h1>";

    nfl.events.forEach(nflEvent => {
      nflEvent.competitions.forEach(nflCompetition => {
        console.log(nfl);

        const [nflHomeTeam, nflAwayTeam] = nflCompetition.competitors;
        nflContainer.innerHTML += `
       
        <div class="card-deck">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title"> ${nflAwayTeam.team.location} ${nflAwayTeam.team.name} <img class="logo" src=" ${nflAwayTeam.team.logo}"> @ ${nflHomeTeam.team.location} ${nflHomeTeam.team.name} <img class="logo" src=" ${nflHomeTeam.team.logo}">  </h5>
                <p class="card-text">Score: </p>
                <p class="card-text">Time: ${nflEvent.status.displayClock} Period: ${nflEvent.status.period}</p>
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

(async function () {
  const mlbContainer = document.querySelector(".mlb");
  const mlbURL = `${MLB_API}`;
  

  try {
    const mlbResponse = await fetch(mlbURL);
    const mlb = await mlbResponse.json();


    mlbContainer.innerHTML = " <h1>MLB</h1>";

    mlb.events.forEach(mlbEvent => {
      mlbEvent.competitions.forEach(mlbCompetition => {
        console.log(mlb);

        const [mlbHomeTeam, mlbAwayTeam] = mlbCompetition.competitors;
        mlbContainer.innerHTML += `
        <div class="card-deck">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title"> ${mlbAwayTeam.team.location} ${mlbAwayTeam.team.name} <img class="logo" src=" ${mlbAwayTeam.team.logo}"> @ ${mlbHomeTeam.team.location} ${mlbHomeTeam.team.name} <img class="logo" src=" ${mlbHomeTeam.team.logo}">  </h5>
                <p class="card-text">Score: </p>
                <p class="card-text"> Inning: ${mlbEvent.status.period}</p>
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
