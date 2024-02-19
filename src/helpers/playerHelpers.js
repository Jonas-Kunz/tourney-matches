
export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
}

// need to go through every player in playerDataArray add wins key
// on each player go through match data and if the player has wins sum them and add the value to the playerDataArray
// reduce? go through matchData: if winner in match data is the same as player add to accuulator then once lopped through all
// set accumulator as value to new wins key in player data

export const addWinsToPlayers = (playerDataArray, matchData) => {
  return playerDataArray.map(player => {
    // Calculating the number of wins in the matchData
    const currentWins = matchData.reduce((accumulator, match) => {
      // Adds a win if the gamerTag matches
      if (match.winner === player.gamerTag) {
        return accumulator += 1;
      } else {
        return accumulator;
      }
    }, 0);

    // Assigns the value to the wins key
    player.wins = currentWins;

    return player
  });
}



