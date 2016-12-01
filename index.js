const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

kittens = ['Milo', 'Otis', 'Garfield'];

function appendKitten(name) {
  var moreKittens;
  moreKittens = [...kittens, name];
  return moreKittens;
}

kittens = ['Milo', 'Otis', 'Garfield'];

function prependKitten(name) {
  var moreKittens;
  moreKittens = [name, ...kittens];
  return moreKittens;
}

kittens = ['Milo', 'Otis', 'Garfield'];

function removeFirstKitten(name) {
  var moreKittens;
  moreKittens = kittens.slice(1);
  return moreKittens;
}

kittens = ['Milo', 'Otis', 'Garfield'];

function removeLastKitten(name) {
  var moreKittens;
  moreKittens = kittens.slice(0, kittens.length - 1);
  return moreKittens;
}

kittens = ['Milo', 'Otis', 'Garfield'];
