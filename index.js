var kittens = ["Milo", "Otis", "Garfield"]; //define your array here
function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
}

function appendKitten(name){
  return kittens.concat(name);
}

function prependKitten(name){
  return [name].concat(kittens);
}

function removeLastKitten(){
  return kittens.slice(0, -1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}