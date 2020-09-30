export const NFL_API =
 /*  "http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard"; */

(async function () {

const scoreContainer = document.querySelector(".container")
  const scoreURL = `${NFL_API}`;

  try {
    const response = await fetch(scoreURL);
    const scores = await response.json();

    scoreContainer.innerHTML = "";
    scores.forEach(score => {
      console.log(score);
    });
  } catch (error) {
    error = ("Nothing here", error);
  }
})();
