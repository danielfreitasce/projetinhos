
let element = '';
const alturaInput = document.getElementById('altura_input');
const pesoInput = document.getElementById('peso_input');
let imcRes = document.getElementById('imc-result');

document.getElementById('submit_calc').addEventListener('click', () => {

  if (element) {
    document.getElementById(element).classList.remove("result-cal");
  }


  let altura = Number(alturaInput.value.replace(',', '.'));
  let peso = Number(pesoInput.value.replace(',', '.'));

  console.log(altura, peso)
  const imc = peso / (altura * altura);
  console.log(imc);

  if (imc < 18.5) {
    element = 'result_calc_0';
  }
  else if (imc >= 18.5 && imc <= 24.9) {
    element = 'result_calc_1';
  }
  else if (imc >= 25.0 && imc <= 29.9) {
    element = 'result_calc_2';
  }
  else if (imc >= 30.0 && imc <= 39.9) {
    element = 'result_calc_3';
  }
  else {
    element = 'result_calc_4';
  }

  document.getElementById(element).classList.add("result-cal");
  imcRes.innerText = imc.toFixed(2).replace('.', ',');
});

document.getElementById('clear_calc').addEventListener('click', () => {

  imcRes.innerText = '';
  alturaInput.value = '';
  pesoInput.value = '';
  document.getElementById(element).classList.remove("result-cal");

});
