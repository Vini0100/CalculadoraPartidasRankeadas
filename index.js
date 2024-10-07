// # 2️⃣ Calculadora de partidas Rankeadas
// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

const vitorias = 12;
const derrotas = 1;
calculaPartidasRanqueadas();

function calculaPartidasRanqueadas() {
  const saldoVitorias = calculaSaldo(vitorias, derrotas);
  const nivel = verificaNivel(saldoVitorias);

  console.log(
    `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
  );
}

function calculaSaldo(vit, der) {
  return vit - der;
}

function verificaNivel(saldo) {
  const titulos = [
    ["Ferro", 0],
    ["Bronze", 11],
    ["Prata", 21],
    ["Ouro", 51],
    ["Diamante", 81],
    ["Lendário", 91],
    ["Imortal", 101],
  ];

  for (let i = 0; i < titulos.length; i++) {
    if (
      i === titulos.length - 1 ||
      (saldo >= titulos[i][1] && saldo < titulos[i + 1][1])
    ) {
      return titulos[i][0];
    }
  }
}
