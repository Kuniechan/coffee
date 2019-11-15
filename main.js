var gameData = {
  aua: 0,
  schlagproclick: 1
}

function schlagDennis() {
  gameData.aua += gameData.schlagproclick
  document.getElementById("dennisSchlag").innerHTML = gameData.aua + " Schläge gegeben"
}
