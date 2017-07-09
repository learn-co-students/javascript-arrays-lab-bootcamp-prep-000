const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
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

function appendKitten(name) {
  var newKits = kittens.slice(0);
  newKits.push(name)
  return newKits;
}

function prependKitten(name) {
  var newKitsPre = kittens.slice(0);
  newKitsPre.unshift(name);
  return newKitsPre;
}

function removeLastKitten() {
  var newKitsRe = kittens.slice(kittens[0]);
  newKitsRe.pop();
  return newKitsRe;
}

function removeFirstKitten() {
  var newKitsFirst = kittens.slice(1);
  return newKitsFirst;
}
