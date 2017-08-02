const app = "I don't do much."

function destructivelyAppendKitten() {
  kittens.push('Ralph');
  return kittens;
}

function destructivelyPrependKitten() {
  kittens.unshift('Bob');
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten() {
  var lazyKittens = [...kittens, "Broom"];
  return lazyKittens;
}

function prependKitten() {
  var speedyKittens = ["Arnold", ...kittens];
  return speedyKittens;
}

function removeLastKitten() {
  var garfIsGone = kittens.slice(0, kittens.length - 1);
  return garfIsGone;
}

function removeFirstKitten() {
  var whereIsMilo = kittens.slice(1);
  return whereIsMilo;
}
