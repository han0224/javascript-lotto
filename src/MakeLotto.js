const Lotto = require("./Lotto");
const { Random } = require("@woowacourse/mission-utils");
const Utils = require("./Utils");
const { ERROR_MSG } = require("./constants/Message");
const WinningLotto = require("./WinningLotto");

const MakeLotto = {
  makeLotto(number) {
    if (typeof number === "string")
      return new Lotto(number.split(",").map(Number));
    if (number.length === 0)
      return new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6));
    return new Lotto(number);
  },
  makeWinningLotto(lotto, bonus) {
    if (lotto.getNumber().includes(bonus))
      Utils.error(ERROR_MSG.LOTTO_DUPLICATED);
    return new WinningLotto(lotto, bonus);
  },
};

module.exports = MakeLotto;
