const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
   kittens.pop(name);
   return kittens;
}

function appendKitten(name) {
  var moreKittens = [...kittens,name];
  return moreKittens;
}

function prependKitten(name) {
  var moreKittens = [name,...kittens];
  return moreKittens;
}

function removeLastKitten() {
  var fewerKittens = kittens.slice(0,kittens.length-1);
  return fewerKittens;
}

function removeFirstKitten() {
  var fewerKittens = kittens.slice(1);
  return fewerKittens;
}
