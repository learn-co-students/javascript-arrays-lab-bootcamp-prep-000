const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
var destructivelyAppendKitten = function(name){
  kittens.push(name);
  return kittens
}
var destructivelyPrependKitten = function(name){
  kittens.unshift(name);
  return kittens
}
var destructivelyRemoveLastKitten = function(){
  kittens.pop();
  return kittens;
}
var destructivelyRemoveFirstKitten = function(){
  kittens.shift();
  return kittens;
}
var appendKitten = function(name){
  var newKittens = [...kittens, name];
  return newKittens;
}
var prependKitten = function(name){
  var newKittens = [name, ...kittens];
  return newKittens;
}
var removeLastKitten = function(){
  var newKittens = kittens.slice(0 , kittens.length - 1);
  return newKittens;
}
var removeFirstKitten = function(){
  var newKittens = kittens.slice(1, kittens.length);
  return newKittens;
}
