var kittens = [] //define your array here

// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  // Adds kitten to end of array
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  // adds kitten to start of array
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  // removes last item in array
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  // removes first item in array
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  // adds kitten to end of array without mutation
  // returns a new array
  return [...kittens, name];
}

function prependKitten(name) {
  // prepends kitten to array without mutation
  // returns a new array
  return [name, ...kittens];
}

function removeLastKitten() {
  // Removes last element in array without mutating
  // Returns a new array
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  // removes first element in array without mutating
  // returns a new array
  return kittens.slice(1, kittens.length);
}








