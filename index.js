var kittens = [] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function appendKitten(name){
  return [...kittens, name];
}

function prependKitten(name){
  return [name, ...kittens];
}

function removeLastKitten(){
  return kittens.slice(0,-1);
}

function removeFirstKitten(){
  return kittens.slice(1)
}