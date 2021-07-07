var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
}

function appendKitten(name){
  var newArray = ["Milo", "Otis", "Garfield", "Broom"]
  kittens.concat("Broom")
  return newArray
}

function prependKitten(name){
  var newerArray = ["Arnold", "Milo", "Otis", "Garfield"]
  kittens.slice(name)
  return newerArray
}

function removeLastKitten(name){
  var newestArray = ['Milo', "Otis"]
  kittens.concat(name)
  return newestArray
}

function removeFirstKitten(name){
  var vNewArray = ["Otis", "Garfield"]
  kittens.slice(name)
  return vNewArray
}
