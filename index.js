var kittens = [] //define your array here

// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  var newKittens = [...kittens, name]
  return newKittens
}

function prependKitten(name){
  var newKittens = [name, ...kittens];
  return newKittens;
}

function removeLastKitten(){
  var newKittens = kittens.slice(0, kittens.length-1);
  return newKittens;
}

function removeFirstKitten(){
  var newKittens = kittens.slice(1, kittens.length);
  return newKittens;
}
  

