import { getPlayerInfo } from "./data.js";

const wantedPlayerId = prompt(
    "Enter id of player you want info of (you can find it by searching for a player here: https://www.opendota.com)"
);

const playerData = await getPlayerInfo(wantedPlayerId);

console.log(playerData);

const playerNameDiv = document.getElementById("playerName");
const rankingPointsDiv = document.getElementById("rankingPoints");
const profilePicture = document.getElementById("pfp");
if (playerData.profile.name !== null) {
    playerNameDiv.textContent = `Player's professional name is: ${playerData.profile.name}`;
} else {
    playerNameDiv.textContent = `Player's current steam name is: ${playerData.profile.personaname}`;
}
playerNameDiv.classList.remove("hidden");
if (playerData.leaderboard_rank !== null) {
    rankingPointsDiv.textContent = `Player's current rank in the leaderboard is: ${playerData.leaderboard_rank}`;
} else {
    rankingPointsDiv.textContent = `Player's current MMR is: ${playerData.mmr_estimate.estimate}`;
}
rankingPointsDiv.classList.remove("hidden");
document.getElementById("avatarText").classList.remove("hidden");
profilePicture.src = playerData.profile.avatarfull;
profilePicture.classList.remove("hidden");