const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

var destructivelyAppendKitten = function(name){
  kittens.push(name);
  return kittens;
}

var destructivelyPrependKitten = function(name){
  kittens.unshift(name);
  return kittens;
}

var destructivelyRemoveLastKitten = function(){
  kittens.pop();
  return kittens;
}

var destructivelyRemoveFirstKitten = function(){
  kittens.shift();
  return kittens
}

var appendKitten = function(name){
  var array = [...kittens];
  array.push(name);
  return array;
}

var prependKitten = function(name){
  
  var array =[...kittens];
  array.unshift(name);
  return array;
}

var removeLastKitten = function(){
  var array =[...kittens];
  array.pop();
  return array;
}

var removeFirstKitten= function(){
  var array = [...kittens];
  array.shift();
  return array;
  
}