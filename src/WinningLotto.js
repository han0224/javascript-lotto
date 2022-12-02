class WinningLotto {
  #number;
  #bonus;
  constructor(lotto, bonus) {
    this.#number = lotto.getNumber();
    this.#bonus = bonus;
  }
  getlotto() {
    return `number: ${this.#number}, bonus: ${this.#bonus}`;
  }
}

module.exports = WinningLotto;
