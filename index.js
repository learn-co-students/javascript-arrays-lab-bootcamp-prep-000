const app = "I don't do much."


var destructivelyAppendKitten=function(name){
  kittens.push(name);
  return kittens;
};

var destructivelyPrependKitten = function(name){
  kittens.unshift(name);
  return kittens;
};

var destructivelyRemoveLastKitten = function(){
  kittens.pop();
  return kittens;
};

var destructivelyRemoveFirstKitten = function(){
  kittens.shift();
  return kittens;
};

var removeLastKitten=function(){
  return kittens.slice(0,kittens.length-1);
};

var removeFirstKitten=function(){
  return kittens.slice(1,kittens.length);
};

var appendKitten=function(name){
  var newArray = kittens.slice(0,kittens.length);
  newArray.push(name);
  return newArray;
}

var prependKitten=function(name){
  var newArray = kittens.slice(0,kittens.length);
  newArray.unshift(name);
  return newArray;
}