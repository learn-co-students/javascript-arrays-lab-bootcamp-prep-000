var kittens = [] //define your array here

// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var newArr = [...kittens, name];
  return newArr;
}

function prependKitten(name){
  var newArr = [name, ...kittens];
  return newArr;
}

function removeLastKitten(){
  var newArr = kittens.slice(0, kittens.length-1);
  return newArr;
}

function removeFirstKitten(){
  var newArr = kittens.slice(1, kittens.length)
  return newArr;
}

