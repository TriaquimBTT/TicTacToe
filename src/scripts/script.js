let botoes = document.querySelectorAll('.botao');
let popup1 = document.querySelector('.popup1');
let botaoNJ = document.getElementById('novo-jogo');
let botaoR = document.getElementById('reiniciar');
let msg = document.getElementById('mensagem');

let pattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [2, 5, 8],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

let turnoX = true;
let count = 0;

const desativarBotoes = () => {
  botoes.forEach((element) => (element.disabled = true));
  popup1.classList.remove('hide');
};

const ativarBotoes = () => {
  botoes.forEach((element) => {
    element.innerText = '';
    element.disabled = false;
  });
  popup1.classList.add('hide');
};

const vencerJogo = (letra) => {
  desativarBotoes();
  if (letra == 'x') {
    msg.innerHTML = "&#x1f389; <br> X ganhoou!";
  } else {
    msg.innerHTML = "&#x1f389; <br> O ganhoou!";
  }
};

const empate = () => {
  desativarBotoes();
  msg.innerHTML = "&#x1f389; <br> empatee!";
}

botaoNJ.addEventListener('click', () => {
  count = 0;
  ativarBotoes();
});

botaoR.addEventListener('click', () => {
  count = 0;
  ativarBotoes();
});

const verificarVencedor = () => {
  for (let i of pattern) {
    let [element1, element2, element3] = [
      botoes[i[0]].innerText,
      botoes[i[1]].innerText,
      botoes[i[2]].innerText,
    ];
    if (element1 != '' && (element2 != '') & (element3 != '')) {
      if (element == element2 && element2 == element3) {
        vencerJogo(element1);
      }
    }
  }
};

botoes.forEach((element) => {
  element.addEventListener('click', () => {
    if (turnoX) {
      turnoX = false;
      element.innerText = 'x'
      element.disabled = true;
    } else {
      turnoX = true;
      element.innerText = 'o'
      element.disabled = true;
    }
    count += 1;
    if (count == 9) {
      empate();
    }
    verificarVencedor();
  });
});

window.onload = ativarBotoes;