// Par ou ímpar
// Jogador escolhe se quer par ou ímpar;
// Jogador escolhe um número entre 0 e 5;
// CPU escolher, aleatoriamente, um número entre 0 e 5;
// É preciso clicar no botão para acionar a lógica;
//   O jogo soma os 2 valores;
//   O jogo divide o total por 2 e compara:
//      - Se não houver resto, o número é par;
//      - Se houver resto, o número é ímpar;
// O jogo informa quem venceu;
// O jogo pergunta se você deseja jogar mais uma partida;

"use strict";

function Rodada() {
    // Inicio o escopo
    // var POI = function () {}

    // Inicio um array com os números que posso selecionar;
    var numeros = [0, 1, 2, 3, 4, 5];

    // Inicio o placar para o jogador e para a CPU
    var placar = {
        Jogador: 0,
        CPU: 0
    };

    // Faço a escolha do número que a CPU escolhe aleatoriamente
    function Random() {
        return Math.floor(Math.random() * 6);
    }

    /* ------------------------------------------------------------ UI --------- */
    // Seleciono os elementos com classe poi-escolha
    var $btnPOI = document.getElementsByClassName("poi-escolha");

    // Adiciono os escutadores do evento click, da função ClickPOI
    $btnPOI[0].addEventListener("click", ClickPOI);
    $btnPOI[1].addEventListener("click", ClickPOI);

    var escolhaPOI;

    // Crio a função ClickPOI
    function ClickPOI(e) {
        var JJogadorPOI = e.target.attributes['data-indice'].value;

      // Mostro a escolha entre par ou ímpar
      document.getElementById("poi-escolha-jogador-poi").innerHTML = 'Você escolheu: ' + JJogadorPOI;

      escolhaPOI = JJogadorPOI;
  }

    // Seleciono os elementos com classe poi-escolha-número
    var $btnNumero = document.getElementsByClassName("poi-escolha-numero");

    // Adiciono os escutadores do evento click, da função ClickNumero
    $btnNumero[0].addEventListener("click", ClickNumero);
    $btnNumero[1].addEventListener("click", ClickNumero);
    $btnNumero[2].addEventListener("click", ClickNumero);
    $btnNumero[3].addEventListener("click", ClickNumero);
    $btnNumero[4].addEventListener("click", ClickNumero);
    $btnNumero[5].addEventListener("click", ClickNumero);

    // Crio a função para pegar o evento de clicar em um número entre 0 e 5
    function ClickNumero(e) {
      // Armazeno o número escolhido pelo jogador, jogada do jogador número
      var JJogadorNumero = e.target.attributes['data-indice'].value;

      // Mostro o número escolhido pelo jogador
      document.getElementById("poi-escolha-jogador-numero").innerText = 'Você escolheu o número: ' + JJogadorNumero;

      // Crio a variável JCPU com a função de escohe aleatória dos números pela CPU
      var JCPU = Random();

      // Mostro o valor que a CPU jogou
      document.getElementById("poi-escolha-cpu").innerText = 'A CPU escolheu o número: ' + JCPU;

      // Somo os valores da CPU + Número do jogador;
      var soma = Number(JCPU) + Number(JJogadorNumero);

      // Mostro a soma das 2 escolhas
      document.getElementById("poi-soma").innerText = 'A soma foi: ' + soma;

      // Determino se o número é par ou ímpar
      if (soma % 2 == 0) {
          // Se for par, ou seja, se o módulo da divisão por 2 for == 0
        var resultado = "par";
        document.getElementById("poi-resultado").innerText = "O número é " + resultado + "!";
      } else {
          // Se for par, ou seja, se o módulo da divisão por 2 for == 1
          var resultado = "ímpar";
        document.getElementById("poi-resultado").innerText = "O número é " + resultado + "!";
      }

      if (resultado == escolhaPOI) {
          document.getElementById("poi-vencedor").innerText = "Parabéns, você ganhou!";
          console.log (resultado);
          console.log (escolhaPOI);
      } else {
          document.getElementById("poi-vencedor").innerText = "Eu, eu eu, você se deu mal!!!";
          console.log (resultado);
          console.log (escolhaPOI);
      }
    }
}
