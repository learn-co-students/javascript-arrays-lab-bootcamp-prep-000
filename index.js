const app = "I don't do much."
var destructivelyAppendKitten = function(newCat){
  kittens.push(newCat);
  return kittens;
}

var destructivelyPrependKitten = function(newCat){
  kittens.unshift(newCat);
  return kittens;
}


var destructivelyRemoveLastKitten = function(){
  kittens.pop();
  return kittens;
}

var destructivelyRemoveFirstKitten = function(){
  kittens.shift();
  return kittens;
}

var appendKitten = function(newCat){
  var newArray = [...kittens, newCat];
  return newArray;
}

var prependKitten = function(newCat){
  var newArray = [newCat, ...kittens];
  return newArray;
}

var removeLastKitten = function(newCat){
  var newArray = kittens.slice(0, -1);
  return newArray;
}

var removeFirstKitten = function(newCat){
  var newArray = kittens.slice(1);
  return newArray;
}
