class LottoGame {
  #winningLotto;
  #lottos;
  constructor() {
    this.#lottos = [];
  }
  addLottos(lotto) {
    this.#lottos.push(lotto);
  }
  setWinningLotto(winningLotto) {
    this.#winningLotto = winningLotto;
  }
  getLotto() {
    return this.#lottos;
  }
  getwinninglotto() {
    return this.#winningLotto;
  }
}

module.exports = LottoGame;
