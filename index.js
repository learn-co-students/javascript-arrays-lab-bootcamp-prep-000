const app = "I don't do much."

function destructivelyAppendKitten(name) {
  return kittens.push(name);

}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  var popped = kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  var shifted = kittens.shift();
  return kittens;
}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten() {
  var temp = kittens.slice(0, kittens.length-1);
  return temp;
}

function removeFirstKitten() {
  var temp = kittens.slice(1-kittens.length);
  return temp;
}
