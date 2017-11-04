const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name){
    kittens.push(name);
}

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveLastKitten(){
  kittens.pop();
}
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveFirstKitten(){
  kittens.shift();
}
var kittens = ["Milo", "Otis", "Garfield"];
function appendKitten(name){
  var newArray = [...kittens, name];
  return newArray;
}
var kittens = ["Milo", "Otis", "Garfield"];
function prependKitten(name){
  var newArray = [name, ...kittens];
  return newArray;
}
var kittens = ["Milo", "Otis", "Garfield"];
function removeLastKitten(){
  var newArray = kittens.slice(0, kittens.length -1);
  return newArray;
}
var kittens = ["Milo", "Otis", "Garfield"];
function removeFirstKitten(){
  var newArray = kittens.slice(1);
  return newArray;
}
