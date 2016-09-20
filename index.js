const app = "I don't do much."
var destructivelyAppendKitten = function(name) {
  kittens.push(name);
  return kittens;
}
var destructivelyPrependKitten = function(name) {
  kittens.unshift(name);
  return kittens;
}
var destructivelyRemoveLastKitten = function() {
  kittens.pop();
  return kittens;
}
var destructivelyRemoveFirstKitten = function() {
  kittens.shift();
  return kittens;
}
var appendKitten = function(name) {
  var newArray = [...kittens, name];
  return newArray;
}
var prependKitten = function(name) {
  var newArray = [name, ...kittens];
  return newArray;
}
var removeLastKitten = function() {
  var newArray  = kittens;
  return newArray.slice(0,-1);
}
var removeFirstKitten = function() {
  var newArray = kittens;
  return newArray.slice(1);

}
