// Função com parâmetro de vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
  
  // Determinar o nível do herói
  let nivel;
  
  switch (true) {
    case saldoVitorias <= 10:
      nivel = "Ferro";
      break;
    case saldoVitorias >= 11 && saldoVitorias <= 20:
      nivel = "Bronze";
      break;
    case saldoVitorias >= 21 && saldoVitorias <= 50:
      nivel = "Prata";
      break;
    case saldoVitorias >= 51 && saldoVitorias <= 80:
      nivel = "Ouro";
      break;
    case saldoVitorias >= 81 && saldoVitorias <= 90:
      nivel = "Diamante";
      break;
    case saldoVitorias >= 91 && saldoVitorias <= 100:
      nivel = "Lendário";
      break;
    default:
      nivel = "Imortal";
    }
      return "O herói tem um saldo de " + saldoVitorias + " pontos e está no nível " + nivel
  }
  
  //Saída
  let resultado = calcularNivel(83,16)
  console.log(resultado)