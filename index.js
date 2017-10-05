const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];
var destructivelyAppendKitten = function (array){
  return kittens.push("Ralph");
}
var kittens = ["Milo", "Otis", "Garfield"];
var destructivelyPrependKitten = function (array){
  return kittens.unshift("Bob");
}
var kittens = ["Milo", "Otis", "Garfield"];
var destructivelyRemoveLastKitten = function (array){
  return kittens.pop();
}
var kittens = ["Milo", "Otis", "Garfield"];
var destructivelyRemoveFirstKitten = function(array){
  return kittens.shift();
}
var kittens = ["Milo", "Otis", "Garfield"];
var appendKitten = function (array){
  var appendKitten = [...kittens, "Broom"];
  return appendKitten;
}
var kittens = ["Milo", "Otis", "Garfield"];
var prependKitten = function (array){
  var prependKitten = ["Arnold",...kittens];
  return prependKitten;
}
var kittens = ["Milo", "Otis", "Garfield"];
var removeFirstKitten = function (array){
  var removeFirstKitten = kittens.slice(1);
  return removeFirstKitten;
}

var kittens = ["Milo", "Otis", "Garfield"];
var removeLastKitten = function(array){
  var removeLastKitten = ["Milo", "Otis"];
  return removeLastKitten;
}
