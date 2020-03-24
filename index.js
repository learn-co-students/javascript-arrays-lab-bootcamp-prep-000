var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here

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
function prependKitten(name){
  var newArr = ([name, ... kittens]);
  return newArr;
}
function appendKitten(name){
  var newArr = kittens.concat(name);
  return newArr;
}
function removeFirstKitten(){
  var newArr = kittens.slice(1);
  return newArr;
}
function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1);
}