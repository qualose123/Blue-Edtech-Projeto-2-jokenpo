const prompt = require("prompt-sync")();
//LISTA DE OPÇÕES
console.clear();
console.log(`PEDRA, PAPEL E TESOURA  ✊ ✋ ✌
 O JOGO FUNCIONA DA SEGUINTE MANEIRA: PEDRA PERDE(É EMBRULHADA) PARA PAPEL E GANHA(ESMAGA) DE TESOURA, TESOURA PERDE PARA PEDRA E GANHA(CORTA) DE PAPEL,CASO SE REPITA PEDRA COM PEDRA, PAPEL COM PAPEL OU TESOURA COM TESOURA,OS JOGADORES EMPATAM!`);

let opcoes = ["pedra", "papel", "tesoura"];
let vitorias = 0;
let derrotas = 0;

let continuar = "sim";
while (continuar.toLocaleLowerCase() === "sim") {
  let numRodadas = +prompt("Deseja rodar quantas rodadas?");
  for (let i = 0; i < numRodadas; i++) {
    let jogador = +prompt(
      "Para selecionar sua opção digite o numero: [0]-Pedra,[1]-Papel,[2]-Tesoura"
    );
    //VALIDAÇÃO DA OPÇÃO DO JOGADOR
    while (jogador != 0 && jogador != 1 && jogador != 2) {
      console.log("Insira uma opção valida");
      jogador = +prompt(
        "Para selecionar sua opção digite o numero: [0]-Pedra,[1]-Papel,[2]-Tesoura"
      );
    }
    //OPÇÃO VADIDADA E SELECIONADA
    let selecionadoUsuario = opcoes[jogador];

    //OPÇÃO DO COMPUTADOR(NPC)
    let numAleatorio = Math.trunc(Math.random() * 3);
    let computador = opcoes[numAleatorio];

    let escolhaJogadorePc = console.log(
      `o Jogador escolheu ${selecionadoUsuario}, e o NPC escolheu ${computador}`
    );
    //RESULTADOS POSSÍVEIS, CASO A ESCOLHA DO JOGADOR SEJA PEDRA
    if (jogador == 0 && numAleatorio == 1) {
      console.log("Papel ganha de Pedra, O NPC Ganhou!");
      derrotas++;
    } else if (jogador == 0 && numAleatorio == 2) {
      console.log("Pedra ganha de Tesoura, Você Ganhou!");
      vitorias++;
    } else if (jogador == 0 && numAleatorio == 0) {
      console.log("Pedra e Pedra dar empate, Você e o NPC Empataram!");
    }
    //RESULTADOS POSSÍVEIS CASO A ESCOLHA DO JOGADOR SEJA PAPEL
    if (jogador == 1 && numAleatorio == 0) {
      console.log("Papel ganha de Pedra, Você Ganhou!");
      vitorias++;
    } else if (jogador == 1 && numAleatorio == 2) {
      console.log("Tesoura ganha de Papel, o NPC Ganhou!");
      derrotas++;
    } else if (jogador == 1 && numAleatorio == 1) {
      console.log("Papel e Papel dar empate, Você e o NPC Empataram!");
    }
    //RESULTADOS POSSÍVEIS CASO A ESCOLHA DO JOGADOR SEJA TESOURA
    if (jogador == 2 && numAleatorio == 0) {
      console.log(" Pedra ganha de Tesoura, O NPC Ganhou!");
      derrotas++;
    } else if (jogador == 2 && numAleatorio == 1) {
      console.log("Tesoura ganha de Papel, Você Ganhou!");
      vitorias++;
    } else if (jogador == 2 && numAleatorio == 2) {
      console.log("Tesoura e Tesoura dar empate, Você e o NPC Empataram!");
    }
  }
  if (vitorias > derrotas) {
    console.log("O jogador ganhou!");
  } else if (derrotas > vitorias) {
    console.log("O NPC ganhou!");
  } else {
    console.log("O Jogador e o NPC empataram!");
  }
  console.log(`
  ████████████████████████████████████████████████████████████████████████████████
█▄─▄▄─██▀▄─██▄─▄▄▀██▀▄─██▄─▄─▀█▄─▄▄─█▄─▀█▄─▄█─▄▄▄▄███████▄─█─▄█─▄▄─█─▄▄▄─█▄─▄▄─█
██─▄▄▄██─▀─███─▄─▄██─▀─███─▄─▀██─▄█▀██─█▄▀─██▄▄▄▄─█░░█████▄▀▄██─██─█─███▀██─▄█▀█
▀▄▄▄▀▀▀▄▄▀▄▄▀▄▄▀▄▄▀▄▄▀▄▄▀▄▄▄▄▀▀▄▄▄▄▄▀▄▄▄▀▀▄▄▀▄▄▄▄▄▀▀▄▀▀▀▀▀▀▄▀▀▀▄▄▄▄▀▄▄▄▄▄▀▄▄▄▄▄▀
█████████████████████████████████████████████████████████████████████████████▀████████
█▄─▄▄─█▄─▄█▄─▀█▄─▄██▀▄─██▄─▄███▄─▄█░▄▄░▄█─▄▄─█▄─██─▄███─▄▄─█████▄─▄█─▄▄─█─▄▄▄▄█─▄▄─█░█
██─▄████─███─█▄▀─███─▀─███─██▀██─███▀▄█▀█─██─██─██─████─██─███─▄█─██─██─█─██▄─█─██─█▄█
▀▄▄▄▀▀▀▄▄▄▀▄▄▄▀▀▄▄▀▄▄▀▄▄▀▄▄▄▄▄▀▄▄▄▀▄▄▄▄▄▀▄▄▄▄▀▀▄▄▄▄▀▀▀▀▄▄▄▄▀▀▀▄▄▄▀▀▀▄▄▄▄▀▄▄▄▄▄▀▄▄▄▄▀▄▀`);
  console.log();
  continuar = prompt("Deseja reiniciar o jogo, digite [sim] ou [não]?");
}
