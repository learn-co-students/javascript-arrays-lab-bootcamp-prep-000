var kittens = ['Milo', 'Otis', 'Garfield']

var destructivelyAppendKitten = function(name){
  kittens.push(name);
  return kittens;
}

var destructivelyPrependKitten = function(name){
  kittens.unshift(name);
  return kittens;
}

var destructivelyRemoveLastKitten = function(name){
  kittens.pop(name);
  return kittens;
}

var destructivelyRemoveFirstKitten = function(name){
  kittens.shift(name);
  return kittens;
}

var appendKitten = function(name){
  var kittens1 = [...kittens, name];
  return kittens1;
}

var prependKitten = function(name){
  var kittens1 = [name, ...kittens];
  return kittens1;
}

var removeLastKitten = function(){
  var kittens1 = kittens.slice(0, kittens.length - 1);
  return kittens1
}

var removeFirstKitten = function(){
  var kittens1 = kittens.slice(1);
  return kittens1
}

// var removeElementFromEndOfArray = function(array){
//   return array.slice(0, array.length - 1);
// }
//
// var removeElementFromBeginningOfArray = function(array){
//   return array.slice(1);
//   return array;
// }
