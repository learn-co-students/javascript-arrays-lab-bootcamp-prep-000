
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop(name);
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
function appendKitten (name){
    var newKittens = [...kittens]
  newKittens.push(name)
  return newKittens
}
function prependKitten(name){
   var newKittens = [...kittens]
  newKittens.unshift(name)
  return newKittens
}
function removeLastKitten(){
  var newKittens = [...kittens]
  newKittens.pop(name)
  return newKittens
}
function removeFirstKitten(){
  var newKittens = [...kittens]
  newKittens.shift(name)
  return newKittens
}







