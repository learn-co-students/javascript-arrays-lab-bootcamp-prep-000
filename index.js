function destructivelyAppendKitten(el) {
  kittens.push(el);
}

function destructivelyPrependKitten(el) {
  kittens.unshift(el);
}

function destructivelyRemoveFirstKitten(el) {
  kittens.shift();
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function appendKitten(el) {
  var arr = [...kittens, el];
  return arr;
}

function prependKitten(el) {
  var arr = [el,...kittens];
  return arr;
}

function removeLastKitten() {
  var a = [...kittens];
  a.pop();
  return a;
}

function removeFirstKitten() {
  var b = [...kittens];
  b.shift();
  return b;
}
