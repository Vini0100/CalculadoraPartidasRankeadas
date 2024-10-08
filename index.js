const vitorias = 12;
const derrotas = 1;
calculaPartidasRanqueadas();

function calculaPartidasRanqueadas() {
  const saldoVitorias = calculaSaldo(vitorias, derrotas);
  const nivel = verificaNivel(saldoVitorias);

  console.log(
    `O Herói tem o saldo de ${saldoVitorias} e está no nível de ${nivel}`
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
