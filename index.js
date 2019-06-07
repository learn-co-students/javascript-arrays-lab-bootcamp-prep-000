var kittens = ['Milo', 'Otis', 'Garfield']; //define your array here

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
}

function appendKitten(name) {
  var newKittens = kittens.slice(); 
  // or var newKittens = [...kittens];
  newKittens.push(name);
  return newKittens;
}

function prependKitten(name) {
  var newKittens = kittens.slice();
  newKittens.unshift(name);
  return newKittens;
}

function removeLastKitten() {
  var newCats = kittens.slice();
  newCats.pop();
  return newCats;
}

function removeFirstKitten() {
  var newCats = kittens.slice();
  newCats.shift();
  return newCats;
}



