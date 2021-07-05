var kittens = [] //define your array here

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
  var plums = [...kittens, name]
  return plums;
}

function prependKitten(name) {
  var plums = [name, ...kittens];
  return plums;
}

function removeLastKitten(name) {
  var plums = kittens.slice(0,kittens.length -1 );
  return plums;
}

function removeFirstKitten(name) {
  var plums = kittens.slice(1,kittens.length);
  return plums;
}