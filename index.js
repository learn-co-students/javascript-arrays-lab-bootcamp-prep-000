const app = "I don't do much."

var kittens = ['Milo','Otis','Garfield']

function destructivelyAppendKitten(element){
  kittens.push(element);
  return kittens;
}
function destructivelyPrependKitten(element){
  kittens.unshift(element)
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
function appendKitten(element){
  var newArray = [...kittens, element];
  return newArray;
}
function prependKitten(element){
  var newArray = [element,...kittens];
  return newArray;
}
function removeLastKitten(){
  var newArray = kittens.slice(0, kittens.length -1);
  return newArray;
}
function removeFirstKitten(array){
  var newArray = kittens.slice(1);
  return newArray;
}