const app = "I don't do much."
// 1 
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten (name) {
  return kittens.push(name);
}

// 2 
function destructivelyPrependKitten (name) {
  return kittens.unshift(name);
}

// 3 
function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

// 4 
function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

// 5 
function removeLastKitten() {
  var lastKittenRemoved = kittens.slice(0, -1);
  return lastKittenRemoved;
}

// 6 
function removeFirstKitten() {
  var firstKittenRemoved = kittens.slice(1);
  return firstKittenRemoved;
}

// 7 
function appendKitten(name) {
  var appendedKitten = [...kittens, name];
  return appendedKitten;
}

// 8 
function prependKitten(name) {
  var prependedKitten = [name, ...kittens];
  return prependedKitten;
}


