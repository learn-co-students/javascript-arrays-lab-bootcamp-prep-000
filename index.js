const app = "I don't do much.";


var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(value){
  kittens.push(value);
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyPrependKitten(value){
  kittens.unshift(value);
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveLastKitten(value){
  kittens.pop(value);
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveFirstKitten(value){
  kittens.shift(value);
  return kittens
}
var kittens = ["Milo", "Otis", "Garfield"]
function appendKitten(value){
  var newkittens = [...kittens,value];
  return newkittens
}
var kittens = ["Milo", "Otis", "Garfield"]
  function prependKitten(value){
  var newkittens = [value,...kittens];
  return newkittens
}
var kittens = ["Milo", "Otis", "Garfield"]
     function removeLastKitten(){
     var newkittens= kittens.slice(0, kittens.length-1);
     return newkittens
}
var kittens = ["Milo", "Otis", "Garfield"]
     function removeFirstKitten(){
     var newkittens= kittens.slice(1, kittens.length+1);
     return newkittens
}
