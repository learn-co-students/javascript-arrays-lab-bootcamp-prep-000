var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
var destructivelyAppendKitten = function(array){
  kittens.push(array);
};
var destructivelyPrependKitten = function (array) {
  kittens.unshift(array);
};
var destructivelyRemoveLastKitten = function(array) {
  kittens.pop();
};
var destructivelyRemoveFirstKitten = function(array) {
  kittens.shift();
};
var appendKitten = function(array) {
  return [...kittens,array];
};
var prependKitten = function(array ) {
  return [array,...kittens];
};
var removeLastKitten = function() {
  return kittens.slice(0, kittens.length -1);
};
var removeFirstKitten = function(array) {
  return kittens.slice(1);
};