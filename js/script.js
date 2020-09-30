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
        console.log(event);
        scoreContainer.innerHTML += `
        <th>${event.shortName}<th>
      `
        
        })  
    });

    } catch (error) {
      error = ("Nothing here", error);
      console.log(error);
    }
  })();
  