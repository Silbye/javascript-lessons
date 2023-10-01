import { getPlayerInfo } from "./data.js";

const wantedPlayerId = prompt(
    "Enter id of player you want info of (you can find it by searching for a player here: https://www.opendota.com)"
);

const playerData = await getPlayerInfo(wantedPlayerId);

console.log(playerData);

function updateName(data) {
    const playerNameDiv = document.getElementById("playerName");
    if (data.profile.name !== null) {
        playerNameDiv.textContent = `Player's professional name is: ${data.profile.name}`;
    } else {
        playerNameDiv.textContent = `Player's current steam name is: ${data.profile.personaname}`;
    }
    playerNameDiv.classList.remove("hidden");
}

function updateRanking(data) {
    const rankingPointsDiv = document.getElementById("rankingPoints");
    if (data.leaderboard_rank !== null) {
        rankingPointsDiv.textContent = `Player's current rank in the leaderboard is: ${data.leaderboard_rank}`;
    } else {
        rankingPointsDiv.textContent = `Player's current MMR is: ${data.mmr_estimate.estimate}`;
    }
    rankingPointsDiv.classList.remove("hidden");
}

function updatePicture(data) {
    const profilePicture = document.getElementById("pfp");
    profilePicture.src = data.profile.avatarfull;
    document.getElementById("avatarText").classList.remove("hidden");
    profilePicture.classList.remove("hidden");
}

function updateInfo(playerData) {
    updateName(playerData);
    updateRanking(playerData);
    updatePicture(playerData);
}

updateInfo(playerData);