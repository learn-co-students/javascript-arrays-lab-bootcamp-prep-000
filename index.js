var kittens = ['Milo', 'Otis', 'Garfield'];

// Add your functions and code here

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
  var append = [...kittens, name];
  return append;
}

function prependKitten(name) {
  var prepend = [name, ...kittens];
  return prepend;
}

function removeLastKitten() {
  var removeFirst = kittens.slice(0, kittens.length -1);
  return removeFirst;
}

function removeFirstKitten() {
  var removeSecond = kittens.slice(1);
  return removeSecond;
}