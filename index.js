const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

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
  var array = [...kittens];
  array.push(name);
  return array;
}

function prependKitten(name) {
  var array = [...kittens];
  array.unshift(name);
  return array;
}

function removeLastKitten() {
  var array = [...kittens];
  array.pop();
  return array;
}

function removeFirstKitten() {
  var array = [...kittens];
  array.shift();
  return array;
}



