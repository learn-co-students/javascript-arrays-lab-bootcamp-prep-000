var kittens = ["Milo", "Otis", "Garfield"]//define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
kittens.push(name)
return kittens
}

destructivelyAppendKitten("Ralph");

function destructivelyPrependKitten(name){
  return kittens = [name, ...kittens]
}

destructivelyPrependKitten("Ralph");

function destructivelyRemoveLastKitten(){

  kittens.pop()
  return kittens
}

destructivelyRemoveLastKitten();

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

destructivelyRemoveFirstKitten();

function appendKitten(name){
  return kittens = [name, ...kittens]
}

appendKitten("Broom");

function removeLastKitten () {
  return kittens.slice(1)
}

removeLastKitten();
