const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

var destructivelyAppendKitten = function(name){
  kittens.push(name);
}

var kittens = ["Milo", "Otis", "Garfield"];

var destructivelyPrependKitten = function(name){
  kittens.unshift(name);
}

var kittens = ["Milo", "Otis", "Garfield"];

var destructivelyRemoveLastKitten = function(){
  kittens.pop();
}

var kittens = ["Milo", "Otis", "Garfield"];

var destructivelyRemoveFirstKitten = function(){
  kittens.shift();
}

var kittens = ["Milo", "Otis", "Garfield"];

var appendKitten = function(name){
  return [...kittens, name];
}

var prependKitten = function(name){
  return [name, ...kittens];
}

var removeLastKitten = function(){
  return kittens.slice(0, kittens.length - 1);
}

var removeFirstKitten = function(){
  return kittens.slice(1);
}
