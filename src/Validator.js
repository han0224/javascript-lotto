const { ERROR_MSG } = require("./constants/Message");
const VALUE = require("./constants/Value");
const Utils = require("./Utils");

const Validator = {
  checkPurchaseAmount(input) {
    if (isNaN(input)) Utils.error(ERROR_MSG.PURCHASE_AMOUT);
    if (input % VALUE.LOTTO_PRIZE === 0) {
      return input / VALUE.LOTTO_PRIZE;
    }
    Utils.error(ERROR_MSG.PURCHASE_AMOUT);
  },
  checkLottoNumber(number) {
    return Utils.isNumber(number) || (number >= 1 && number <= 45);
  },
};

module.exports = Validator;
