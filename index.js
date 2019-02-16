var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function appendKitten(name){
  let newKittens = kittens.concat(name);
  return newKittens;
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
  return kittens;
}

function prependKitten(name){
  let newKittens = [name, ...kittens];
  return newKittens;
}

function removeLastKitten(){
  let newKittens = kittens.slice(0, kittens.length -1)
  return newKittens
}

function removeFirstKitten(){
  let newKittens = kittens.slice(1, kittens.length)
  return newKittens;
}