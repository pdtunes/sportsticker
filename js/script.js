import { NFL_API } from "./data/data.js";

(async function () {
  const scoreContainer = document.querySelector(".container");
  const scoreURL = `${NFL_API}`;

  try {
    const response = await fetch(scoreURL);
    const nfl = await response.json();

    scoreContainer.innerHTML = "";
    nfl.leagues.forEach(score => {
      scoreContainer.innerHTML = `
        <h4>${score.abbreviation}</h4> 
        `;

   

      nfl.events.forEach(event => {
        event.competitions.forEach(competition => {
            console.log(event);
            competition.competitors.forEach(competitor => {
            console.log(competitor);   
                
            

             
    
                 
        scoreContainer.innerHTML += `
<div class="card-group">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">  ${event.shortName} </h5>
      <p class="card-text">score</p>
      <p class="card-text">${event.status.displayClock}</p>
    </div>
  </div>
</div>
      `;
        })
      });
    })
    });
  } catch (error) {
    error = ("Nothing here", error);
    console.log(error);
  }
})();
