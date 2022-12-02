const { Console } = require("@woowacourse/mission-utils");
const { PRINT_MSG } = require("./constants/Message");
const OutputView = {
  printLottos(lottos) {
    Console.print(`\n${lottos.length}${PRINT_MSG.BUY}`);
    for (let index = 0; index < lottos.length; index++) {
      Console.print(lottos[index].getLotto());
    }
  },
  printWinning() {},
  printRate() {},
};

module.exports = OutputView;
