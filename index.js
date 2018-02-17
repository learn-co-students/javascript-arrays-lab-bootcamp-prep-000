var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten() {
  return kittens.push('Ralph');
}

function destructivelyPrependKitten() {
  return kittens.unshift('Bob');
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten() {
  var newArr = [...kittens, 'Broom'];
  return newArr;
}

function prependKitten() {
  var newArr = ['Arnold', ...kittens];
  return newArr;
}

function removeLastKitten() {
  var newArr = kittens.slice(0, kittens.length - 1);
  return newArr;
}

function removeFirstKitten() {
  var newArr = kittens.slice(1);
  return newArr;
}
