const totalCompraInput = document.getElementById('purchase');
const totalCompraOutput = document.getElementById('valor-total-compra');
const formaPagInput = document.getElementById('payment-method');
const formaPagOutput = document.getElementById('forma-pagamento');
const quantParcelasElmt = document.getElementById('installment');
const installmentLabel = document.getElementById('installment-label');
const acrescimosElmt = document.getElementById('acrescimos');
const descontoElmt = document.getElementById('descontos');
const valorParcElmt = document.getElementById('valor-parcela');



formaPagInput.addEventListener("change", showPaymentMethod);
totalCompraInput.addEventListener("change", showTotal);
quantParcelasElmt.addEventListener("change", showQuant);

let formaPag = '';
let totalCompra = 0;
let quantParcelas = 1;
let acrescimos = 0;
let descontos = 0;
let valorParcela = 0;
let totalAPagar = 0;


function showTotal() {
  totalCompra = totalCompraInput.value
  totalCompraOutput.innerHTML = `R$ ${totalCompra}`;
  totalCompraOutput.classList.add('white');
  recalcValues();
}

function showPaymentMethod() {
  formaPag = formaPagInput.value
  formaPagOutput.innerHTML = `${formaPag}`;
  formaPagOutput.classList.add('white');

  if (formaPag === 'Parcelado') {
    quantParcelasElmt.removeAttribute('disabled');
    quantParcelasElmt.setAttribute('required', '');
    quantParcelasElmt.focus();
  }
  else {
    quantParcelasElmt.value = null;
    quantParcelasElmt.setAttribute('disabled', '');
    installmentLabel.innerHTML = 'Quantidade de parcelas:';
  }

  recalcValues();
}

function showQuant() {

  if (quantParcelasElmt.value >= 4 && quantParcelasElmt.value <= 12) {
    quantParcelas = quantParcelasElmt.value;
    installmentLabel.innerHTML = 'Quantidade de parcelas:';
    formaPagOutput.innerHTML = `À prazo, em ${quantParcelas}x`;
  }
  else {
    installmentLabel.innerHTML += '<br><span style="color:red;font-size:0.5em;">A quantidade de parcelas deve estar entre 4 e 12</span>';
  }
  recalcValues();
}

function recalcValues() {
  calcAcrescDiscounts();
  calcInstallmentAmount(formaPag, quantParcelasElmt.value);
  calcTotal();
}

function calcAcrescDiscounts() {
  if (!formaPag) return;

  acrescimosElmt.innerHTML = 'R$ 0';
  descontoElmt.innerHTML = 'R$ 0';
  acrescimos = 0;
  descontos = 0;

  switch (formaPag) {
    case 'Parcelado':
      let acrescimoCalc = calcAcrescimo();
      acrescimosElmt.innerHTML = `+ R$ ${Number(acrescimoCalc).toFixed(2)} (4%)`;
      acrescimos = acrescimoCalc;
      break;
    case '3x':
      break;
    case 'Dinheiro':
      descontos = calcDiscount(0.1);
      descontoElmt.innerHTML = `- R$ ${ descontos.toFixed(2) } (10%)`;
      break;
    case 'Débito':
      descontos = calcDiscount(0.08);
      descontoElmt.innerHTML = `- R$ ${ descontos.toFixed(2) } (8%)`;
      break;
    case 'Crédito':
      descontos = calcDiscount(0.05);
      descontoElmt.innerHTML = `- R$ ${ descontos.toFixed(2) } (5%)`;
      break;
  }
}

function calcAcrescimo() {
  return totalCompra * 0.04;
}

function calcDiscount(discountPercent) {
  return (totalCompra * discountPercent);
}

function calcInstallmentAmount(formaPag, value) {

  let isInstallment = false;

  switch (formaPag) {
    case '3x':
      isInstallment = true;
      quantParcelas = 3;
      break;
    case 'Parcelado':
      isInstallment = value ? true : false;
      quantParcelas = value;
      break;
    default:
      isInstallment = false;
      quantParcelas = 1;
  }

  valorParcela = Number(totalCompra) + Number(acrescimos);
  valorParcela /= Number(quantParcelas);
  if (isInstallment) {
    valorParcElmt.innerHTML = `R$ ${ valorParcela.toFixed(2) } `;
    valorParcElmt.parentElement.classList.remove('hide-elem');
  }
  else {
    valorParcElmt.parentElement.classList.add('hide-elem');
  }
}

function calcTotal() {
  if (!formaPag || !totalCompra) return;

  totalAPagar = (Number(totalCompra) + Number(acrescimos)) - Number(descontos);
  document.getElementById('to-pay').value = totalAPagar.toFixed(2);
}