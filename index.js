var kittens = [] //define your array here

// Add your functions and code here
var destructivelyAppendKitten = function(name){
  return kittens.push(name);
};

var destructivelyPrependKitten = function(name){
  return kittens.unshift(name);
};

var destructivelyRemoveLastKitten = function(){
  return kittens.pop();
};

var destructivelyRemoveFirstKitten = function(){
  return kittens.shift();
};

var appendKitten = function(name){
  var newArray = [...kittens, name];
  return newArray;
};

var prependKitten = function(name){
  var newArray = [name, ...kittens];
  return newArray;
};

var removeLastKitten = function(){
  return kittens.slice(0, kittens.length - 1);
};

var removeFirstKitten = function(){
  return kittens.slice(1);
};