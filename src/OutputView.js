const { Console } = require("@woowacourse/mission-utils");
const { PRINT_MSG, WINNING_MSG } = require("./constants/Message");
const OutputView = {
  printLottos(lottos) {
    Console.print(`\n${lottos.length}${PRINT_MSG.BUY}`);
    for (let index = 0; index < lottos.length; index++) {
      Console.print(lottos[index].getLotto());
    }
  },
  printWinning(result) {
    const price = [0, 2000000000, 30000000, 1500000, 50000, 5000];
    Console.print(PRINT_MSG.RESULT);
    for (let rank = 5; rank > 0; rank--) {
      Console.print(`${WINNING_MSG[rank]}${result[rank]}${PRINT_MSG.COUNT}`);
      //   this.profit += this.winningLotto[rank] * price[rank];
    }
  },
  printRate() {},
};

module.exports = OutputView;
