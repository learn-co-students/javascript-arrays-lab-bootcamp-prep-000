const app = "I don't do much."

function destructivelyAppendKitten(kitten) {
  return kittens.push(kitten);
}

function destructivelyPrependKitten(kitten) {
  return kittens.unshift(kitten);
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function appendKitten(kitten) {
  return [...kittens, kitten];
}

function prependKitten(kitten) {
  return [kitten, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length -1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
