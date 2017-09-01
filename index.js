const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var a2 = [...kittens, name];
  return a2;
}

function prependKitten(name) {
  var a2 = [name, ...kittens];
  return a2;
}

function removeLastKitten() {
  var a2 = kittens.slice(0,kittens.length-1);
  return a2;
}

function removeFirstKitten() {
  var a2 = kittens.slice(1,kittens.length);
  return a2;
}
