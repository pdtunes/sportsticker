import { NFL_API } from "./data/data.js";

(async function () {
  const nflContainer = document.querySelector(".card-deck");
  const scoreURL = `${NFL_API}`;

  try {
    const response = await fetch(scoreURL);
    const nfl = await response.json();

    nflContainer.innerHTML = "";

    nfl.events.forEach(event => {
      event.competitions.forEach(competition => {
        console.log(nfl);

        const [homeTeam, awayTeam] = competition.competitors;
        nflContainer.innerHTML += `
        <div class="card-deck">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title"> ${awayTeam.team.location} ${awayTeam.team.name} <img class="logo" src=" ${awayTeam.team.logo}"> @ ${homeTeam.team.location} ${homeTeam.team.name} <img class="logo" src=" ${homeTeam.team.logo}">  </h5>
                <p class="card-text">Score: </p>
                <p class="card-text">Time: ${event.status.displayClock} Period ${event.status.period}</p>
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
