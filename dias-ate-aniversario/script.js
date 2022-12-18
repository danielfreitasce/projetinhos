const hoje = new Date();
const diaAtual = hoje.getUTCDate();
const mesAtual = hoje.getMonth();

const thisYear = hoje.getFullYear();
console.log('dia atual ' + diaAtual)
console.log('mes atual ' + mesAtual)

function verify(e) {
  e.preventDefault();
  let inputDay = document.getElementById('day').value;
  let inputMonth = document.getElementById('month').value;
  inputMonth -= 1;

  let daysDifference = 0;
  let isPast;
  let msg = '';

  if (diaAtual == inputDay && mesAtual == inputMonth) {
    msg = '<p>Hoje é seu anivérsário &#127881;!</p>'
    postResult(msg);
    return;
  }
  else if (diaAtual > inputDay || mesAtual > inputMonth) {
    isPast = true;
    daysDifference = calcDifference(inputDay, inputMonth, isPast);
  }
  else {
    isPast = false;
    daysDifference = calcDifference(inputDay, inputMonth, isPast);
  }

  msg = `<p>${isPast ? 'Passaram-se' : 'Restam'} ${daysDifference} dias ${isPast ? 'do' : 'para o'} seu aniversário.</p>`;

  postResult(msg);

}

function calcDifference(day, month, isPast) {

  let anniversary = new Date(2022, month, day);

  let timeDifference = 0;

  if (isPast) {
    timeDifference = hoje.getTime() - anniversary.getTime();
  }
  else {
    timeDifference = anniversary.getTime() - hoje.getTime();
  }

  //Um dia em millisegundos
  const oneDay = 1000 * 60 * 60 * 24;

  let daysDifference = Math.ceil(timeDifference / oneDay);
  return daysDifference;
}

function postResult(msg) {
  document.getElementById('result').innerHTML = msg;
}