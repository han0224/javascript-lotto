class LottoGame {
  #winningLotto;
  #lottos;
  constructor() {
    this.#lottos = [];
  }
  addLottos(lotto) {
    this.#lottos.push(lotto);
  }

  getLotto() {
    return this.#lottos;
  }
}

module.exports = LottoGame;
