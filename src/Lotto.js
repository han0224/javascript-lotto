const { ERROR_MSG } = require("./constants/Message");
const Utils = require("./Utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    numbers.sort((a, b) => a - b);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw Utils.error(ERROR_MSG.WRONG_LENGTH);
    }
    if (new Set(numbers).size !== 6) {
      throw Utils.error(ERROR_MSG.NOT_DUPLICATED);
    }
    if (numbers.some((value) => !Utils.isNumber(value))) {
      throw Utils.error(ERROR_MSG.ONLY_NUMBER);
    }
    if (numbers.some((value) => value < 1 || value > 45)) {
      throw Utils.error(ERROR_MSG.OVER_RANGE);
    }
  }
  getNumber() {
    return this.#numbers;
  }
  /*************************/
  compare(winningLotto, bonusNumber) {
    switch (new Set([...winningLotto, ...this.#numbers]).size) {
      case 6:
        return 1;
      case 7:
        if (this.#numbers.includes(bonusNumber)) return 2;
        return 3;
      case 8:
        return 4;
      case 9:
        return 5;
      default:
        return 0;
    }
  }

  getLotto() {
    return `[${this.#numbers.join(", ")}]`;
  }
}

module.exports = Lotto;
