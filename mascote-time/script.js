const roboRatValidVotsElement = document.getElementById('roboRat-v');
const roboRatInvVotsElement = document.getElementById('roboRat-inv');
const superKbValidVotsElement = document.getElementById('spK-v');
const superKbInvVotsElement = document.getElementById('spK-inv');

document.getElementById('bt-result').addEventListener("click", calcResults);

function calcResults() {

  const roboRatValidVots = Number(roboRatValidVotsElement.value);
  const roboRatInvalidVots = Number(roboRatInvVotsElement.value);

  const superKbValidVots = Number(superKbValidVotsElement.value);
  const superKbInvalidVots = Number(superKbInvVotsElement.value);

  //Calculo de totais de cada mascote
  const robotRatTotalVots = roboRatValidVots + roboRatInvalidVots;
  const superKbTotalVots = superKbValidVots + superKbInvalidVots;

  //total de votos
  const totalVots = getGeneralResults(robotRatTotalVots, superKbTotalVots);

  getInvalidResults(totalVots, roboRatInvalidVots, superKbInvalidVots);
  getFinalResult(totalVots, roboRatValidVots, superKbValidVots);

}

function getGeneralResults(robotRatTotalVts, spKbTotalVts) {

  const totalVots = robotRatTotalVts + spKbTotalVts;

  //porcentagem de votos de cada mascote em relação ao total de votos
  const votsRobotRatPercent = (robotRatTotalVts / totalVots) * 100;
  const votsSuperKbPercent = (spKbTotalVts / totalVots) * 100;

  let result = `
  <p>Total de votos: <b>${totalVots}</b> 
  <p>Total de votos de cada mascote:<br>
   RoboRat <b>${robotRatTotalVts}</b><br>
   SuperKeyboard <b>${spKbTotalVts}</b></p>
  </p>
  <p>Porcentagem de votos de cada mascote em relação ao total de votos:<br>
   RoboRat <b>${votsRobotRatPercent.toFixed(2)}%</b><br>
   SuperKeyboard <b>${votsSuperKbPercent.toFixed(2)}%</b>
  </p>
  `

  document.getElementById('results').innerHTML = result;
  return totalVots;
}

function getInvalidResults(totalVots, robotRatInvVts, superKbInvVts) {

  const totalInvalidVots = robotRatInvVts + superKbInvVts;

  //porcentagem de votos invalidos em relação ao total de votos;
  const invalidVotsPercent = (totalInvalidVots / totalVots) * 100;

  //porcentagem de votos inválidos por mascote considerando apenas votos invalidos
  const invalidVotsRobotRatPercent = (robotRatInvVts / totalInvalidVots)*100;
  const invalidVotsSuperKbPercent = (superKbInvVts / totalInvalidVots)*100;

  let result = `
     <p>Total de votos inválidos: <b>${totalInvalidVots}</b></p>
     <p>Porcentagem de votos inválidos em relação ao total de votos: ${invalidVotsPercent.toFixed(2)}%
     <p>Porcentagem de votos inválidos por mascote, considerando apenas o total de votos inválidos: <br>
           
     RoboRat <b>${invalidVotsRobotRatPercent.toFixed(2)}%</b><br>
     SuperKeyboard <b>${invalidVotsSuperKbPercent.toFixed(2)}%</b></p>
  `

  document.getElementById('invalid-results').innerHTML = result
}

function getFinalResult(totalVots, roboRatValidVots, superKbValidVots) {

  const totalValidVots = roboRatValidVots + superKbValidVots;
  const validVotsPercent = (totalValidVots / totalVots) * 100;

  const robotRatPercent = (roboRatValidVots / totalValidVots) * 100;
  const superKbPercent = (superKbValidVots / totalValidVots) * 100;

  let winner = '';

  if (robotRatPercent == superKbPercent)
    winner = 'Empate!';
  else if (robotRatPercent > superKbPercent)
    winner = 'RoboRat';
  else
    winner = 'SuperKeyboard';


  let result = `
   <p>Total de votos válidos: <b>${totalValidVots}</b></p>
  
  <p>Porcentagem de votos válidos em relação ao total de votos: ${validVotsPercent.toFixed(2)}%</p>
     
   <p><b>Porcentagem de votos validos por mascote</b>, considerando apenas o total de votos válidos:<br>  
  RoboRat <b>${robotRatPercent.toFixed(2)}%</b><br>
  SuperKeyboard <b>${superKbPercent.toFixed(2)}%</b></p>

  <p>Vencedor: <b>${winner}</b></p>
  `;

  document.getElementById('valid-results').innerHTML = result

  let sc = winner === 'RoboRat' ? 'rb' : 'spkb';
  document.getElementById(sc + '-section').style.border = "5px solid #8844ee";
  document.getElementById(sc + '-img').style.border = "5px solid #8844ee";
}


