const pairElm = document.getElementById('pair');
const oddElm = document.getElementById('odd');

pairElm.addEventListener('click', verifyPair);
oddElm.addEventListener('click', verifyOdd);

const mapType = new Map([
  ['pair', 'par'],
  ['odd', 'ímpar']
]);

function verifyPair() {
  verify('pair');
}

function verifyOdd() {
  verify('odd');
}

function verify(escolha) {
  //document.getElementById(type).style.border = "3px solid indigo";
  getResult(escolha);
}

function getResult(escolha) {

  const aleatorio = Math.floor(Math.random() * 100);
  console.log(aleatorio);

  let result = isPair(aleatorio);

  const match = result === escolha ? 'acertou!&#128513;' : 'errou.&#128517;';

  const msg = document.getElementById('msg');
  msg.innerHTML = `O número sorteado foi <b>${aleatorio}</b>, que é um número <b>${mapType.get(result)}</b>. Você ${match}`
}

function isPair(num) {
  return num % 2 == 0 ? 'pair' : 'odd';
}