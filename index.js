const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(array){
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(array){
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten(array){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(array){
  kittens.shift();
  return kittens
}

function appendKitten(array){
  var array = [...kittens, "Broom"]
  return array;
}

function prependKitten(array){
  var array = ["Arnold", ...kittens]
  return array;
}

function removeLastKitten(array){
  var array = kittens.slice(0, kittens.length-1)
  return array
}


function removeFirstKitten(array){
  var array = kittens.slice(1)
  return array;
}
