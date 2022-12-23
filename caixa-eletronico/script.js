let withdrawValue = 0; 
let withdrawValueElm;
let value = '';
let quantBills = [0,0,0,0]; 
const bills = [100, 50, 20, 10];

let output = document.getElementById('tela-input');

function preventKeyboardInput(event) {
    event.preventDefault();
}


function withdrawCash(){
   if(withdrawValue === 0) return; 

   if(withdrawValue % 10 === 0 ) {
       let msg = calcWithdraw(withdrawValue);
       showSucess(msg);
   }
   else{
        showError();
   }
}

function calcWithdraw(withdrawValue) {
    calc(withdrawValue); 
    
    console.log(quantBills);
    
    let msg = `<p>Você realizou um saque de R$${withdrawValue}</p>`;
    let elm = '<ul>'; 

    for(let i = 0; i< quantBills.length; i++){
        if(quantBills[i] > 0) {
            elm += `<li>${quantBills[i]} nota(s) de ${bills[i]};</li>`;
        }
    }
    elm += '</ul>'
    return msg+elm;
}

function calc(withdrawValue) {
   let aux = withdrawValue;

    for(let i = 0; i < bills.length; i++) {
        if(aux > 0) {
            let quantBill = Math.trunc(aux/bills[i]); 
            quantBills[i] = quantBill; 
            aux -= (quantBill*bills[i]); 
        } 
    }
}

function showSucess(msg) {

    let button =  '<span id="novo-saque">Iniciar novo saque</span>'; 
    output.innerHTML = msg+button;
    output.classList.remove('tela-input');
    output.classList.add('novo-saque');    
    document.getElementById('novo-saque').addEventListener('click', resetValues);
}

function showError(){
    let notasDisponiveis = ''; 
    bills.forEach((b) =>  (notasDisponiveis += (b +',')));
    console.log(notasDisponiveis);
 
    let msg = `<span class="error">Não há notas disponíveis para este valor: R$${withdrawValue}.</span>
    <span class="disponiveis"> Notas disponíveis: ${notasDisponiveis.slice(0,-1)}.</span>`;

    document.getElementById('tela-input').innerHTML += msg;
    resetAndFocus();
}

function resetAndFocus(){
    changeWithdrawValueAnula();
    withdrawValueElm = document.getElementById('withdraw-input'); 
    withdrawValueElm.focus();
}

function resetValues() {
    output.classList.add('tela-input');
    output.classList.remove('novo-saque');
    output.innerHTML = '<p>Digite o valor do Saque</p><input id="withdraw-input" type="number" min="10" step="10" onkeydown="preventKeyboardInput(event)"/>';
    resetAndFocus();
}

function changeWithdrawValue(event) {
    let number = event.target.innerText;
    value += number; 
    withdrawValue = Number(value);
    withdrawValueElm.value = withdrawValue;
    
}
 
function changeWithdrawValueCorrige() {
     if(value) {
         value = value.slice(0, -1); 
         withdrawValue = Number(value); 
         withdrawValueElm.value = withdrawValue;
     }
}

function changeWithdrawValueAnula() {
    withdrawValue = 0;
    value = ''; 
    withdrawValueElm.value = 0;
    quantBills = [0,0,0,0]; 
}

function init() {
    for(let i = 0; i <=9; i++) {
        document.getElementById('tlc-num-'+i).addEventListener('click', changeWithdrawValue); 
    }

    document.getElementById('anula').addEventListener('click', changeWithdrawValueAnula);
    document.getElementById('corrige').addEventListener('click', changeWithdrawValueCorrige);
    document.getElementById('confirma').addEventListener('click', withdrawCash);
    withdrawValueElm = document.getElementById('withdraw-input'); 
    withdrawValueElm.focus();
}

init();
