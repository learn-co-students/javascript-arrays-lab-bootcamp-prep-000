const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name)
  return name
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return name
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
  return name
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
  return name
}

function appendKitten(name){
  var cats = [name]
  cats = [...kittens, name]
  return cats
}

function prependKitten(name){
  var cats = [name]
  cats = [name, ...kittens]
  return cats
}

function  removeLastKitten(name){
  var cats = [name]
  cats = kittens.slice(0, kittens.length - 1)
  return cats
}

function removeFirstKitten(name){
  var cats = [name]
  cats = kittens.slice(1)
  return cats
}
