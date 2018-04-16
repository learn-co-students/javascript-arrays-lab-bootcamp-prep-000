const app = "I don't do much.";


var kittens = ['Milo', 'Otis', 'Garfield'];

// Destructively appending a kitten
function destructivelyAppendKitten(name) {
  var dAK = kittens.push(name);
  return dAK;
}

// Destructively prepend a kittens
function destructivelyPrependKitten(name) {
  var dPK = kittens.unshift(name);
  return dPK;
}

// Destructively Remove Last kitten
function destructivelyRemoveLastKitten(name) {
  var dRLK = kittens.pop(name);
  return dRLK;
}

// Destructively Remove First kitten
function destructivelyRemoveFirstKitten(name) {
  var dRFK = kittens.shift(name);
  return dRFK;
}

// Append kitten in new array
function appendKitten(name) {
  var aK = [...kittens, name];
  return aK;
}

// Prepend kitten in new array
function prependKitten(name) {
  var pK = [name,...kittens];
  return pK;
}

// Remove the last kitten and return a new array
function removeLastKitten() {
  var rLK = kittens.slice(0, kittens.length -1);
  return rLK;
}

// Remove first kitten and return a new array
function removeFirstKitten() {
  var rFK = kittens.slice(1);
  return rFK;
}