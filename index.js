var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens
}

function appendKitten(name){
  var newkittens = [...kittens, name];
  return newkittens
}

function prependKitten(name){
  var newkittens = [name, ...kittens];
  return newkittens
}
  
function removeLastKitten(){
  var newkittens = kittens.slice(0, length -1);
  return newkittens
}

function removeFirstKitten(){
  var newkittens = kittens.slice(1);
  return newkittens
}