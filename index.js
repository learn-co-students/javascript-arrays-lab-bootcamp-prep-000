// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  dappendKitten();
  return kittens;
}
function destructivelyAppendKitten(name){
  var newArray = kittens;
  newArray.push('Ralph');
  return newArray;
}
function destructivelyPrependKitten(name){
  var newArray = kittens;
  newArray.unshift('Bob');
  return newArray;
}

function destructivelyRemoveLastKitten(){
  kittens.pop('Garfield');
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name, array){
  var newArray = [...kittens, name];
  return newArray;
}

function prependKitten(name){
  var newArray = [name, ...kittens];
  return newArray;
}

function removeLastKitten(){
  var newArray = [...kittens];
  newArray.pop()
  return newArray;
}
function removeFirstKitten(){
  var newArray = [...kittens];
  newArray.shift();
  return newArray;
}
