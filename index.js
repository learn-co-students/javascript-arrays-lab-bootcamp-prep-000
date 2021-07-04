var kittens = [] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push(name);  
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name){
  return kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name){
  return kittens.shift(name);
}

function appendKitten(name){
  var newList = kittens.concat(name);
  return newList
}

function prependKitten(name){
  var newList = [name, ...kittens];
  return newList
}

function removeLastKitten(name){
  var newList = kittens.slice(0, kittens.length - 1);
  return newList
}

function removeFirstKitten(name){
  var newList = kittens.slice(1);
  return newList
}