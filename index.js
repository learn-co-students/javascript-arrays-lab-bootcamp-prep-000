
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(){
  kittens.push("Ralph")
  console.log(destructivelyAppendKitten);
}

function destructivelyPrependKitten(){
  kittens.unshift("Bob")
  console.log(destructivelyPrependKitten);
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  console.log(destructivelyRemoveLastKitten)
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  console.log(destructivelyRemoveFirstKitten);
}
function appendKitten(){
  return kittens.concat("Broom")
}

function prependKitten(){
  var prependKitten= "Arnold,";
  return prependKitten.concat(kittens)
}

function removeLastKitten(){
  let removeLastKitten = kittens.slice(0,2);
  return removeLastKitten
}

function removeFirstKitten(){
  let removeFirstKitten = kittens.slice(1,3)
  return removeFirstKitten
}
  
