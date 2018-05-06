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
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
}

function appendKitten(name) {
  var newKittens = kittens.concat(name);
  return newKittens
}

function prependKitten(name) {
  var newFirstKitten = [name, ...kittens];
  return newFirstKitten
}

function removeLastKitten() {
  var shorterKittens = kittens.slice(0, kittens.length - 1);
  return shorterKittens
}

function removeFirstKitten() {
  var moreShortKittens = kittens.slice(1);
  return moreShortKittens
}



