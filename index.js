var kittens = [] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
 return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name){
  return kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
  return kittens;
}

function appendKitten(name){
  return [...kittens,name];
}

function prependKitten(name){
  return [name, ...kittens];
}

function removeLastKitten(){
   return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}