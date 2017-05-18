const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name){
  var newKittens = kittens.push("Ralph")
  return newKittens;
}


function destructivelyPrependKitten(name){
  var newKittens = kittens.unshift("Bob")
  return newKittens;
}

function  destructivelyRemoveLastKitten() {
  var newKittens = kittens.pop(kittens)
  return newKittens
}

function destructivelyRemoveFirstKitten() {
  var newKittens = kittens.shift(kittens)
  return newKittens
}


function appendKitten(name){
     return [...kittens, name];
   }

function prependKitten(name){
  return [name, ...kittens]
}
// cloned array using the splice function to remove last name from kittens without mutating original kitten array
function removeLastKitten(){
    var tempKittens = kittens.slice(0)
    tempKittens.pop();
    return tempKittens;
}

function removeFirstKitten() {
  var tempKittens = kittens.slice(0)
  tempKittens.shift(0)
  return tempKittens
}
