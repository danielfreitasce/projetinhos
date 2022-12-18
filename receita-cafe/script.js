const allInstructions = [
    '<li>Abra o pacote de café e retire a quantidade de grãos desejada.</li>',
    '<li>Coloque os grãos de café no recipiente da máquina para torrar.</li>',
    '<li>Depois de torrado, triture os grãos e reserve.</li>',
    '<li>Coloque um litro de água em uma chaleira ou recipiente apropriado e leve ao fogo</li>',
    '<li>Depois adicione 4 colheres de café no coador com o filtro de papel</li>',
    '<li>Assim que as primeiras bolhas começarem a subir, desligue o fogo. Não precisa ferver.</li>',
    '<li>Despeje lentamente a água no café. Não mexa a mistura de café e água!</li>',
    '<li>Depois que o café for coado, se sentir necessidade, adicione açúcar a gosto.<p>Aproveite!</p></li>'
  ];
  
  const instElement = document.getElementById('instructions');
  const passosElement = document.getElementById('passos');
  
  let quant = allInstructions.length;
  
  //carregar o select inicial
  loadSelect();
  
  //carregar as instruções
  loadInstructions();
  
  function loadInstructions(start = 0) {
  
    startList = start ? start : start + 1;
  
    start = start ? start - 1 : start;
  
    console.log('startList ' + startList)
    console.log('start ' + start)
  
    let instructions = `<ol start="${startList}">`
  
    for (let i = start; i < quant; i++) {
      instructions += allInstructions[i];
    }
  
    instructions += '<ol>';
  
    instElement.innerHTML += instructions;
  }
  
  function loadSelect() {
  
    let select = 'Ver a partir do passo <select id="inst-select" onchange="load()">';
  
    for (let i = 0; i < quant; i++) {
      select += `<option value=${i + 1}>${i + 1}</option>`;
    }
    select += '</select>'
    passosElement.innerHTML = select;
  
  }
  
  function load() {
    let value = document.getElementById("inst-select").value;
    instElement.innerHTML = '';
    loadInstructions(Number(value));
  }
  
  