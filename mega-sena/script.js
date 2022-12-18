document.getElementById('btn-gerar').addEventListener('click', () => {
    let numbers = [];
  
    while (numbers.length < 6) {
      let n1 = Math.floor(Math.random() * 60) + 1;
      if (!numbers.includes(n1)) {
        numbers.push(n1);
      }
    }
  
    console.log(numbers);
  
    let msg = '';
    for (let i = 0; i < numbers.length; i++) {
      msg += `<li>${numbers[i]}</li>`;
    }
  
    document.getElementsByClassName('numbers-list')[0].innerHTML = msg;
  
  });
  