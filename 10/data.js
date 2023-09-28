export async function getPlayerInfo(playerId) {
    const response = await fetch(
        `https://api.opendota.com/api/players/${playerId}`
    );
    return response.json();
}