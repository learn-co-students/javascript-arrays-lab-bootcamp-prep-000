var kittens = ["Milo", "Otis", "Garfield"]; //define your array here
function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.splice(-1,1);
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
}

function appendKitten(name) {
 var postKitten = kittens.concat(name);
 return postKitten;
}

function prependKitten(name) {
  var preKitten = [name, ...kittens];
  return preKitten;
}

function removeLastKitten() {
  var lastKitten = kittens.slice(0,-1);
  return lastKitten;
}

function removeFirstKitten() {
  var firstKitten = kittens.slice(1);
  return firstKitten;
}

// Add your functions and code here
