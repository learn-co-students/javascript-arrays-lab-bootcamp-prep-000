const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens;
}

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyPrependKitten(name) {
   kittens.unshift(name)
   return kittens;
 }
 
var kittens = ["Milo", "Otis", "Garfield"]; 
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens;
} 
 
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens;
} 

var kittens = ["Milo", "Otis", "Garfield"];
function appendKitten(name) {
  var kittens_a = [...kittens, name]
  return kittens_a;
}

function prependKitten(name) {
  var kittens_a = [name, ...kittens]
  return kittens_a;
}
function removeLastKitten() {
  var kittens_a = kittens.slice(0, kittens.length - 1)
  return kittens_a;
}
 function removeFirstKitten() {
   var kittens_a = kittens.slice(1, kittens.length)
   return kittens_a;
 } 