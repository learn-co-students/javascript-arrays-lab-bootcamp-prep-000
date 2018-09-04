// Add your functions and code here
kittens = ['Milo', 'Otis', 'Garfield']

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
  var newKittens = kittens.push(name);
  return newKittens;
}

function prependKitten(name){
  var newKittens = kittens.unshift(name);
  return newKittens;
}

function removeLastKitten(){
  var newKittens = kittens.slice(1);
  return newKittens;
}

function removeFirstKitten(){
  var newKittens = kittens.slice(-1);
  return newKittens;
}