var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}
// Add your functions and code here
function destructivelyRemoveLastKitten(name){
  return kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name){
  return kittens.shift(name);
}

function appendKitten(name){
  return [...kittens,name];
}

function prependKitten(name){
  return [name,...kittens];
}

function removeLastKitten(name){
  return kittens.slice(0,2);
}

function removeFirstKitten(name){
  return kittens.slice(1);
}