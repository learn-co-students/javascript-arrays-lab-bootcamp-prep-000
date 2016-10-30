const app = "I don't do much."
var kittens = ['Milo','Otis','Garfield'];

function destructivelyAppendKitten(name){
  kittens = [...kittens, name];
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens = [name,...kittens];
  return kittens;
}
function destructivelyRemoveLastKitten(){
  var newArray = kittens.splice(-1);
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  var newArray = kittens.splice(0,1);
  return kittens;
}
function appendKitten(name){
  return [...kittens, name];
}
function prependKitten(name){
  return [name, ...kittens];
}
function removeLastKitten(){
  return kittens.slice(0,2);
}
function removeFirstKitten(){
  return kittens.slice(1,kittens.length);
}
