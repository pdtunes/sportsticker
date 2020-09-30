export const NFL_API = "http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard";

const scoreContainer = document.querySelector(".container")

(async function() {

const scoreURL = `${NFL_API}`

try{
    const response = await fetch(scoreURL);
    const scores = await response.json();

    console.log(scores);
}})()