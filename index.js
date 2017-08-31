const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
   var firstKittens = kittens.push(name);
   return firstKittens
}

function destructivelyPrependKitten(name){
  var lastKittens = kittens.unshift(name);
  return lastKittens
}

function destructivelyRemoveLastKitten(){
  var deadKitten = kittens.pop();
  return deadKitten
}

function destructivelyRemoveFirstKitten(){
  var premeeKitten = kittens.shift();
  return premeeKitten
}

function appendKitten(name){
  var moreKittens = [...kittens, name]
  return moreKittens
}

function prependKitten(name){
  var masKittens = [name, ...kittens]
  return masKittens
}

function removeLastKitten(){
  var specificKittens = kittens.slice(0, kittens.length-1)
  return specificKittens
}

function removeFirstKitten(){
  var someKittens = kittens.slice(1)
  return someKittens
}
