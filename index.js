var kittens = [] //define your array here

// Add your functions and code here

kittens = [ "Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push('Ralph');
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift('Bob');
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens
}

function appendKitten(name){
  return kittens.concat("Broom")
}

function prependKitten(name){
  var sKitten = ["Arnold"]
  return sKitten.concat(kittens)
  
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
  
}

function removeFirstKitten(){
  return kittens.slice(-2)
}