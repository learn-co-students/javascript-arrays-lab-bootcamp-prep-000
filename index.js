var kittens = [] //define your array here

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
  var array = [name]
  var newKittens = kittens
  return newKittens.concat(array);
}

function prependKitten(name){
  var array =  [name]
  var newKittens = kittens
  return array.concat(kittens);
}


function removeLastKitten(){
  var newKittens = kittens;
  return newKittens.slice(0,2);
}

function removeFirstKitten(){
  var newKittens = kittens.slice(1);
  return newKittens;
}