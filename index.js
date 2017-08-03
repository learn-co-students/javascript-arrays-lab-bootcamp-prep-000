const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  return kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}
function appendKitten(name){
  var newKittens = new Array();
  return newKittens = [...kittens, name];
}
function prependKitten(name){
  var newKittens = new Array();
  return newKittens = [name, ...kittens];
}
function removeLastKitten(){
  var newKittens = new Array();
  return newKittens = kittens.slice(0, (kittens.length-1));
}
function removeFirstKitten(){
  var newKittens = new Array();
  return newKittens = kittens.slice(1);
}
