const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(name){
  return kittens.shift()
}

function appendKitten(name){
  var morekittens = [...kittens, `${name}`]
  return morekittens
}

function prependKitten(name){
  var morekittens = [`${name}`,...kittens]
  return morekittens
}

function removeLastKitten(name){
  var lesskittens = kittens.slice(0, kittens.length-1)
  return lesskittens
}

function removeFirstKitten(name){
  var lesskittens = kittens.slice(1)
  return lesskittens
}
