var kittens = ['Milo', 'Otis', 'Garfield']; //define your array here

// Add your functions and code here


function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyRemoveLastKitten(name)  {
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
}

function appendKitten(name) {
  var nArray = kittens.concat(name);
  return nArray;
}

function prependKitten(name) {
  var hey = [name, ...kittens];
  return hey;
}

function removeLastKitten(name) {
  var n;
  n = kittens.slice(0, 2);
  return n;
  
}

function removeFirstKitten(name) {
  var n;
  n = kittens.slice(1);
  return n;
  
}

