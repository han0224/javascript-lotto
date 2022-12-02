class LottoGame {
  #winningLotto;
  #lottos;
  #result;
  constructor() {
    this.#lottos = [];
    this.#result = new Array(6).fill(0);
  }
  addLottos(lotto) {
    this.#lottos.push(lotto);
  }
  setWinningLotto(winningLotto) {
    this.#winningLotto = winningLotto;
  }
  setResult() {
    this.#lottos.forEach((v) => {
      const rank = this.#winningLotto.calcuatorRanking(v.getNumber());
      this.#result[rank] += 1;
    });
  }
  getLotto() {
    return this.#lottos;
  }
  getResult() {
    return this.#result;
  }
  getwinninglotto() {
    return this.#winningLotto;
  }
}

module.exports = LottoGame;
