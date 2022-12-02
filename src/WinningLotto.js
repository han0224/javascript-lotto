class WinningLotto {
  #number;
  #bonus;
  constructor(lotto, bonus) {
    this.#number = lotto.getNumber();
    this.#bonus = bonus;
  }
  calcuatorRanking(lotto) {
    const duplicatedSize = new Set([...lotto, ...this.#number]).size;
    if (duplicatedSize > 9) return 0;
    if (duplicatedSize > 7) return duplicatedSize - 4;
    if (duplicatedSize === 6) return 1;
    if (lotto.includes(this.#bonus)) return 2;
    return 3;
  }
  getlotto() {
    return `number: ${this.#number}, bonus: ${this.#bonus}`;
  }
}

module.exports = WinningLotto;
