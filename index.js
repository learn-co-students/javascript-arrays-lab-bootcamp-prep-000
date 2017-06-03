var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(array){
  return kittens.push('Ralph')
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function destructivelyPrependKitten(array){
  return kittens.unshift('Bob')
}

function appendKitten(a){
  var freshKittens = [...kittens, a]
  return freshKittens
}

function prependKitten(a){
  var freshKittens = [a, ...kittens]
  return freshKittens
}

function removeLastKitten(){
  var freshKittens = kittens.slice(0, kittens.length - 1);
  return freshKittens
}

function removeFirstKitten(){
  var freshKittens = kittens.slice(1);
  return freshKittens
}
