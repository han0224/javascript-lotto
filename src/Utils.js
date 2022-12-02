const { ERROR_MSG } = require("./constants/Message");

class Utils {
  static isNumber(number) {
    return !Number.isNaN(number) && typeof number === "number";
  }
  static error(msg) {
    throw new Error(`[ERROR] ${msg}`);
  }
  static toFixedsecond(number) {
    return Math.round(number * 100) / 100;
  }
  static setBonus(bonus) {
    bonus = Number(bonus);
    if (bonus > 45 || bonus < 1) this.error(ERROR_MSG.OVER_RANGE);
    return bonus;
  }
}

module.exports = Utils;
