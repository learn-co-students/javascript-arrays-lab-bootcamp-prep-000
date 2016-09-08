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
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var oo = [...kittens, name];
  return oo;
}

function prependKitten(name) {
  var oo = [name, ...kittens];
  return oo;
}

function removeLastKitten(name) {
  var oo = kittens.slice(0, kittens.length -1);
  return oo;
}

function removeFirstKitten(name) {
  var oo = kittens.slice(1);
  return oo;
}
