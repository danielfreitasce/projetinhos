const yearElm = document.getElementById('input-year');
const resultElm = document.getElementById('result');

yearElm.addEventListener("keyup", calcYear);

const calcLeapYear = (year) => {
  let isLeapYear = false;

  if (year % 4 === 0 && year % 100 !== 0) {
    isLeapYear = true;
  }
  else if (year % 400 === 0) {
    isLeapYear = true;
  }

  return isLeapYear;
}

function calcYear() {

  let year = yearElm.value;

  if (!year) {
    resultElm.innerHTML = '';
    return;
  }

  let isleapYear = calcLeapYear(yearElm.value);

  if (isleapYear) {
    resultElm.innerHTML = `<p>O ano ${year} é bissexto.</p>`
  } else {
    resultElm.innerHTML = `<p>O ano ${year} <b>não</b> é bissexto.</p>`
  }

  yearElm.focus();

}

/*
Exemplos de anos bissextos para teste
1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052

Mais em https://www.ponteiro.com.br/bisse.php
*/