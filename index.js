const { getChangeInCoins } = require("./util");
let availableCoins = [];

//Main flow
try {
  availableCoins = [20, 13, 2, 22, 1, 14];
  console.log(getChangeInCoins(3.55, availableCoins));

  availableCoins = [20, 13, 2, 22, 1, 0];
  console.log(getChangeInCoins(1, availableCoins));

  availableCoins = [20, 13, 2, 22, 1, 0];
  console.log(getChangeInCoins(15.95, availableCoins));
} catch (error) {
  console.error(error);
}

//Excpection flow: troco não disponível na vending machine.
try {
  availableCoins = [0, 0, 0, 0, 0, 0];
  console.log(getChangeInCoins(99.9, availableCoins));
} catch (error) {
  console.error(error);
}

//Excpection flow: Parâmetros de tipagem incorretos.
try {
  availableCoins = [0, 0, 0, 0, 0, 0];
  console.log(getChangeInCoins("error", 124));
} catch (error) {
  console.error(error);
}
