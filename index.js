const app = "I don't do much."
//var kittens = ["Milo", "Otis", "Garfield"];
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
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
function appendKitten(name){
  var kittennew=[...kittens,name];
  return kittennew;
}
function prependKitten(name){
  var kitten1 = [name,...kittens];
  return kitten1;
}
function removeLastKitten(){
  var kitten1 = kittens;
var  kitten1 = kitten1.slice(0,2);
  return kitten1;
}
function removeFirstKitten(){
  var kitten1 = kittens;
  kitten1 = kitten1.slice(1);
  return kitten1;
}
