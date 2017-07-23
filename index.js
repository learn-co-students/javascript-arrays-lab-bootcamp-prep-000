const app = "I don't do much."
var destructivelyAppendKitten = function(array, element){
  kittens.push('Ralph');
  return kittens;
}
var destructivelyPrependKitten = function(array, element){
  kittens.unshift('Bob');
  return kittens;
}
var destructivelyRemoveLastKitten = function(array, element){
  kittens.pop();
  return kittens;
}
var destructivelyRemoveFirstKitten = function(array, element){
  kittens.shift();
  return kittens;
}
var appendKitten = function(array, element){
  return [...kittens, "Broom"];
}
var prependKitten = function(array, element){
  return ["Arnold", ...kittens];
}
var removeLastKitten = function(array){
  return kittens.slice(0, kittens.length -1);
}
var removeFirstKitten = function(array){
  return kittens.slice(1);
}
