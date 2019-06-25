var kittens = ["Milo", "Otis", "Garfield"] //define your array here

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

function appendKitten(name){
  let kitten2 = [name];
  var allKittens = kittens.concat(kitten2);
  return allKittens
}

function prependKitten(name){
  let moreKittens = [name];
  var evenMoreKittens = moreKittens.concat(kittens);
  return evenMoreKittens;
}

function removeLastKitten(){
  var noLastKitten = kittens.slice(0, 2);
  return noLastKitten;
}

function removeFirstKitten(){
  var noFirstKitten = kittens.slice(1);
  return noFirstKitten;
}