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
  var f = [...kittens, name];
  return f;
}

function prependKitten(name) {
  var f = [name, ...kittens];
  return f;
}

function removeLastKitten() {
  var q = kittens;
  return q.slice(0, q.length - 1);
}

function removeFirstKitten() {
  var q = kittens;
  return q.slice(1);
}
