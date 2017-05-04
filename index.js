const app = "I don't do much."

var destructivelyAppendKitten = function(name){
  kittens.push(name);
  return kittens;
}

var destructivelyPrependKitten=function(name){
  kittens.unshift(name);
  return kittens;
}

var destructivelyRemoveLastKitten=function(){
  kittens.pop();
  return kittens;
}

var destructivelyRemoveFirstKitten=function(){
  kittens.shift();
  return kittens;
}

var appendKitten=function(name){
  var result=[...kittens,name];
  return result;
}

var prependKitten=function(name){
  var result=[name,...kittens];
  return result;
}

var removeLastKitten=function(){
  var result=kittens.slice(0,kittens.length-1);
  return result;
}

var removeFirstKitten=function(){
  var result=kittens.slice(1);
  return result;
}