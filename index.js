const app = "I don't do much."
var kittens = ['Milo','Otis','Garfield'];
var destructivelyAppendKitten = function(name){
  kittens.push(name);
  return kittens
}

var destructivelyPrependKitten = function(name){
  kittens.unshift(name);
  return kittens
}

var destructivelyRemoveLastKitten = function(name){
  kittens.pop();
  return kittens;
}

var destructivelyRemoveFirstKitten = function(name){
  kittens.shift();
  return kittens;
}

var appendKitten = function(name){
  var newArray = [...kittens,name];
  return newArray;
}

var prependKitten = function(name){
  var newArray = [name,...kittens];
  return newArray;
}

var removeLastKitten = function(name){
  var newArray = kittens.slice(0, kittens.length-1);
  return newArray;
}

var removeFirstKitten = function(name){
  var newArray = kittens.slice(1);
  return newArray;
}
