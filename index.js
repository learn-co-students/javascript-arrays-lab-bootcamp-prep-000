var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];


// Arrays destructivelyAppendKitten(name) appends a kitten to the end of the kittens array:
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

// Arrays destructivelyPrependKitten(name) prepends a kitten to the beginningof the kittens array:
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

// Arrays destructivelyRemoveLastKitten() removes the last kitten from the kittens array:
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

// Arrays destructivelyRemoveFirstKitten() removes the First kitten from the kittens array:
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

// Arrays appendKitten(name) appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
function appendKitten(name) {
  var newKittens = [...kittens, name];
  return newKittens;
}

// Arrays prependKitten(name) prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
function prependKitten(name) {
  var newKittens = [name, ...kittens];
  return newKittens;
}

// Arrays removeLastKitten() removes the last kitten in the kittens array andreturns a new array, leaving the kittens array unchanged:
function removeLastKitten(){
  var newKittens = kittens.slice(0,kittens.length -1);
  return newKittens;
}

// Arrays removeFirstKitten() removes the first kitten from the kittens arrayand returns a new array, leaving the kittens array unchanged:
function removeFirstKitten() {
  var newKittens = kittens.slice(1);
  return newKittens;
}