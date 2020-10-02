import { NFL_API } from "./data/data.js";
import { MLB_API } from "./data/data.js";

(async function nflScore() {
  const nflContainer = document.querySelector(".nfl");
  const nflURL = `${NFL_API}`;

  try {
    const nflResponse = await fetch(nflURL);
    const nfl = await nflResponse.json();
    nflContainer.innerHTML = "<h1>NFL</h1>";

    nfl.events.forEach(nflEvent => {
      nflEvent.competitions.forEach(nflCompetition => {
        const [nflHomeTeam, nflAwayTeam] = nflCompetition.competitors;
        nflContainer.innerHTML += `
            <div class="card">
                <div class="card-body">
                <h5 class="card-title"> ${nflHomeTeam.team.location} ${nflHomeTeam.team.name} <img class="logo" src=" ${nflHomeTeam.team.logo}"> @ ${nflAwayTeam.team.location} ${nflAwayTeam.team.name} <img class="logo" src=" ${nflAwayTeam.team.logo}">  </h5>
                <p class="card-text">Score: </p>
                <p class="card-text"> Time: ${nflEvent.status.displayClock} || Quarter: ${nflEvent.status.period} || Game status: ${nflEvent.status.type.description}</p>
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
})();

const nflRSS =
  "https://cors-anywhere.herokuapp.com/https://www.scorespro.com/rss2/live-football.xml";
(async function () {
  try {
    const response = await fetch(nflRSS);
    const result = await response.text();
    if (window.DOMParser) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(result, "text/xml");
      console.log(xmlDoc.getElementsByTagName("title")[1].innerHTML);
    }
  } catch (error) {
    console.log(error);
  }
})();
