/**
 * Função para computar o troco que deve ser devolvido em moedas.
 *
 * @param {number} changeValue  -> Valor do troco que dever ser convertido em moedas.
 * @param {Array} availableCoins -> Array com a Qtd de moedas disponíveis na máquina.
 *
 * @returns {Array} -> Quantidade de moedas a serem despejadas.
 */
const getChangeInCoins = (changeValue, availableCoins) => {
  //changeInCoins: Contadores das moedas utilizas, servirá também como retorno de função.
  //Lembrando que cada índice representa um contador de uma moeda específica
  //[0] -> 1 centavo
  //[1] -> 5 centavos
  //[2] -> 10 centavos
  //[3]-> 25 centavos
  //[4] -> 50 centavos
  //[5] -> 1 real
  const changeInCoins = [0, 0, 0, 0, 0, 0];

  //Mesma lógica da variável changeInCoins, porém armazena o valor da moeda.
  const coinValues = [0.01, 0.05, 0.1, 0.25, 0.5, 1];

  //Validando conformidade dos parâmetros da função.
  if (isNaN(changeValue) || !Array.isArray(availableCoins)) {
    throw "Parâmetros inválidas. changeValue tem que ser do tipo number e availableCoins precisa ser um array.";
  }
  //Contando o valor total de moedas disponíveis.
  let totalAvailableMoney = 0;
  availableCoins.forEach((coinQty, index) => {
    totalAvailableMoney += coinQty * coinValues[index];
  });

  //Lançar exceção caso o dinheiro disponível na vending machine não seja suficiente
  if (totalAvailableMoney < changeValue) {
    throw "Moedas não disponíveis para o troco.";
  }

  //Loop para percorrer as tipos de moedas disponíveis
  for (let index = 5; index >= 0; index--) {
    //Enquanto tivermos moedas disponíveis e o valor do troco seja maior que o valor da moeda.
    while (availableCoins[index] > 0 && changeValue >= coinValues[index]) {
      //Decremento do troco ja pago.
      changeValue -= coinValues[index];
      //Correções de anomalias no valor do troco em ponto flutuante. ex.0,49999999 centavos.
      changeValue = +changeValue.toFixed(2);
      //Incrementa o contador da moeda que foi utilizada no cálculo.
      changeInCoins[index]++;
      //Decremento das moedas disponíveis
      availableCoins[index]--;
    }
  }
  return changeInCoins;
};

module.exports = {
  getChangeInCoins,
};
