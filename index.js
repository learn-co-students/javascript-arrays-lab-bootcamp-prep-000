var kittens = [] //define your array here

// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];

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
  return kittens;
}

function appendKitten(name) {
  var new_array = [];
  for (var i = 0; i < kittens.length; i++) {
    new_array.push(kittens[i]);
  }
  new_array.push(name);
  return new_array;
}

function prependKitten(name) {
  var new_array = [];
  new_array.push(name);
  for (var i = 0; i < kittens.length; i++) {
    new_array.push(kittens[i]);
  }
  return new_array;
}

function removeLastKitten() {
  var new_array = [];
  for (var i = 0; i < (kittens.length - 1); i++) {
    new_array.push(kittens[i]);
  }
  return new_array;
}

function removeFirstKitten() {
  var new_array = [];
  for (var i = 1; i < kittens.length; i++) {
    new_array.push(kittens[i]);
  }
  return new_array;
}



