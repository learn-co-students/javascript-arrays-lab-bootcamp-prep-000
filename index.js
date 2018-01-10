const app = "I don't do much.";

const kittens = [
  'Milo',
  'Otis',
  'Garfield'
]

function destructivelyAppendKitten() {
  kittens.push('Ralph');
}

function destructivelyPrependKitten() {
  kittens.unshift('Bob');
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten() {
  const newArray = kittens.slice();
  newArray.push('Broom');
  return newArray;
}

function prependKitten() {
  const newArray = kittens.slice();
  newArray.unshift('Arnold');
  return newArray;
}

function removeLastKitten() {
  const newArray = kittens.slice();
  newArray.pop();
  return newArray;
}

function removeFirstKitten() {
  const newArray = kittens.slice();
  newArray.shift();
  return newArray;
}
