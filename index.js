var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}


function removeLastKitten() {
  return kittens.slice(0, -1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}