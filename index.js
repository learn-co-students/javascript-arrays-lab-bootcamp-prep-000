const kittens = ['Milo',
  'Otis',
  'Garfield']

function destructivelyAppendKitten(name, array) {
  kittens.push(name);
    return array;
}

function destructivelyPrependKitten(name, array) {
  kittens.unshift(name);
    return array;
}

function destructivelyRemoveLastKitten(name, array) {
  kittens.pop(name);
    return array;
}

function destructivelyRemoveFirstKitten(name, array) {
  kittens.shift(name);
    return array;
}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten(array) {
  return kittens.slice(0, kittens.length -1);
}

function removeFirstKitten(array) {
  return kittens.slice(1);
}
