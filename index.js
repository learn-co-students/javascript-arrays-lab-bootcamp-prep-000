var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

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
  var tempKittens = [...kittens, name];
  return tempKittens;
}

function prependKitten(name) {
    var tempKittens = [name, ...kittens];
    return tempKittens;
}

function removeLastKitten() {
    var tempKittens = [...kittens];
    tempKittens.pop();
    return tempKittens;
}

function removeFirstKitten() {
    var tempKittens = [...kittens];
    tempKittens.shift();
    return tempKittens;
}

