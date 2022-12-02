const Lotto = require("./Lotto");
const { Random } = require("@woowacourse/mission-utils");

const MakeLotto = {
  makeLotto(number) {
    if (typeof number === "string")
      return new Lotto(number.split(",").map(Number));
    if (number.length === 0)
      return new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6));
    return new Lotto(number);
  },
  makeWinningLotto() {},
};

module.exports = MakeLotto;
