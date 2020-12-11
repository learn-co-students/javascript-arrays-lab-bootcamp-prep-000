var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

var kittens = ['Milo', 'Otis', 'Garfield']

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];

}

function removeLastKitten(name) {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten(name) {
  return kittens.slice(1);
}
