const { Random, Console } = require("@woowacourse/mission-utils");
const { INPUT_MSG } = require("./constants/Message");
const Validator = require("./Validator");

const InputView = {
  inputPurchase(callback) {
    Console.readLine(INPUT_MSG.PURCHASE_AMOUT, (answer) => {
      callback(Validator.checkPurchaseAmount(Number(answer)));
    });
  },
  inputBonus() {},
  inputWinningNumber() {},
};

module.exports = InputView;
