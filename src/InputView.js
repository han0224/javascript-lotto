const { Random, Console } = require("@woowacourse/mission-utils");
const { INPUT_MSG } = require("./constants/Message");
const MakeLotto = require("./MakeLotto");
const Utils = require("./Utils");
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
  inputBonus(callback) {
    Console.readLine(INPUT_MSG.BONUS_NUMBER, (answer) => {
      callback(Utils.setBonus(answer));
    });
  },
};

module.exports = InputView;
