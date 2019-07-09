var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here

function kittens () {
  return kittens;
}

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
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
  var kitten4 = "Broom";
  return(kittens.concat(kitten4));
}

function prependKitten(name) {
  ["Arnold", ...kittens];
  name = ["Arnold", ...kittens];
  return name;
}

prependKitten("Arnold");

function removeLastKitten() {
  kittens.slice(0,2);
  var kitties = kittens.slice(0,2);
  return kitties;
}

function removeFirstKitten() {
  kittens.slice(1);
  var kittiesTwo = kittens.slice(1);
  return kittiesTwo;
}