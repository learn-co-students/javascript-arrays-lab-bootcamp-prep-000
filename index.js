const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
}

function appendKitten(name) {
  var moreKittens = [...kittens, name];
  return moreKittens
}

function prependKitten(name) {
  var otherKittens = [name, ...kittens];
  return otherKittens
}

function removeLastKitten() {
  var lessKittens = kittens.slice(0, kittens.length - 1);
  return lessKittens
}

function removeFirstKitten() {
  var fewerKittens = kittens.slice(1);
  return fewerKittens
}
