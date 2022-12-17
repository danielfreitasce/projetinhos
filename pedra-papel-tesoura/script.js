/*
REGRAS:
Pedra ganha da tesoura (amassando-a ou quebrando-a).
Tesoura ganha do papel (cortando-o).
Papel ganha da pedra (embrulhando-a).
*/

const pedra = document.getElementById('pedra');
const papel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');
const result = document.getElementById('result');
let usrChoiceElement = document.getElementById('user-choice');
let cpuChoiceElement = document.getElementById('cpu-choice');

const play = (event) => {
  result.innerHTML = '';
  let cpuChoice = Math.floor(Math.random() * (4 - 1)) + 1;
  let usrChoice = event.srcElement.id;
  console.log(cpuChoice)

  switch (cpuChoice) {
    case 1:
      cpuChoice = 'pedra';
      break;
    case 2:
      cpuChoice = 'papel';
      break;
    case 3:
      cpuChoice = 'tesoura';
      break
  }

  usrChoiceElement.textContent = document.getElementById(usrChoice).textContent;
  cpuChoiceElement.textContent = document.getElementById(cpuChoice).textContent;

  if (cpuChoice == usrChoice) {
    result.innerHTML = 'Empatamos!!! &#128512;';
  }
  else if (cpuChoice == 'pedra' && usrChoice == 'tesoura') {
    result.innerHTML = 'Você perdeu. &#128517;';
  }
  else if (usrChoice == 'pedra' && cpuChoice == 'tesoura') {
    result.innerHTML = 'Você ganhou!!! &#128513;';
  }
  else if (cpuChoice == 'tesoura' && usrChoice == 'papel') {
    result.innerHTML = 'Você perdeu. &#128517;';
  }
  else if (usrChoice == 'tesoura' && cpuChoice == 'papel') {
    result.innerHTML = 'Você ganhou!!! &#128513;';
  }
  else if (cpuChoice == 'papel' && usrChoice == 'pedra') {
    result.innerHTML = 'Você perdeu. &#128517;';
  }
  else if (cpuChoice == 'pedra' && usrChoice == 'papel') {
    result.innerHTML = 'Você ganhou!!! &#128513;';
  }
}

pedra.addEventListener('click', play);
papel.addEventListener('click', play);
tesoura.addEventListener('click', play);


