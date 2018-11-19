var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(elem){
  kittens.push(elem);
  return kittens;
}

function destructivelyPrependKitten(elem){
  kittens.unshift(elem);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(elem){
  kittens.shift();
  return kittens;
}

function appendKitten(elem){
  return [...kittens, elem];
}

function prependKitten(elem){
  return [elem, ...kittens];
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length-1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}