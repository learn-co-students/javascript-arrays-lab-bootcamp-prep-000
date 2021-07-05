var kittens = [ 'Milo', 'Otis', 'Garfield' ]

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  let newKittens = kittens.slice()
  newKittens.push(name)
  return newKittens;
}

function prependKitten(name) {
  return [name].concat(kittens.slice());
}

function removeLastKitten() {
  return kittens.slice(0,-1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}