var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten() {
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten() {
 kittens.unshift("Bob");
 return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(0);
  return kittens;
}

//NOT DESTRUCTIVE
function appendKitten(name) {
  return [...kittens,name];
}

function prependKitten(name) {
  return [name,...kittens];
}

function removeLastKitten() {
  return kittens.slice(0,kittens.length-1);
}
function removeFirstKitten() {
  return kittens.slice(1,kittens.length);
}
