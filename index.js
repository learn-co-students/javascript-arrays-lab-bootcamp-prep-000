const app = "I don't do much."

function destructivelyAppendKitten(kitten) {
  return kittens.push(kitten);
}

function destructivelyPrependKitten(kitten) {
  return kittens.unshift(kitten);
}

function destructivelyRemoveLastKitten(kitten) {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(kitten) {
  return kittens.shift(1);
}

function appendKitten(kitten) {
  var new_kittens = [...kittens, kitten];
  return new_kittens;
}

function prependKitten(kitten) {
  var new_kittens = [kitten, ...kittens];
  return new_kittens;
}

function removeLastKitten() {
  var new_kittens = kittens.slice(0, kittens.length - 1);
  return new_kittens;
}

function removeFirstKitten() {
  var new_kittens = kittens.slice(1);
  return new_kittens;
}
