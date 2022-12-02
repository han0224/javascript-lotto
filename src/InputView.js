const { Random, Console } = require("@woowacourse/mission-utils");
const { INPUT_MSG } = require("./constants/Message");
const MakeLotto = require("./MakeLotto");
const Validator = require("./Validator");

const InputView = {
  inputPurchase(callback) {
    Console.readLine(INPUT_MSG.PURCHASE_AMOUT, (answer) => {
      callback(Validator.checkPurchaseAmount(Number(answer)));
    });
  },
  inputWinningNumber(callback) {
    Console.readLine(INPUT_MSG.WINNING_NUMBER, (answer) => {
      callback(MakeLotto.makeLotto(answer));
    });
  },
  inputBonus() {},
};

module.exports = InputView;
