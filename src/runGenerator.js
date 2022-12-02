function isTask(task) {
  return typeof task === "function";
}
function whileGenerator(gen, preGenerator) {
  if (isTask(preGenerator.value)) {
    const task = preGenerator.value;
    const resolve = (...args) => whileGenerator(gen, gen.next(...args));
    task(resolve);
  } else if (!preGenerator.done) {
    whileGenerator(gen, gen.next(preGenerator.value));
  }
}

function runGenerator(generator) {
  const gen = generator();
  whileGenerator(gen, gen.next());
}

module.exports = runGenerator;
