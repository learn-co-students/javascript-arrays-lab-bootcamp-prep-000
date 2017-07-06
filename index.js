function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
  return [name,...kittens]
}

function removeLastKitten(){
  var kittens1 = kittens.slice(0,kittens.length - 1)
  return kittens1
}

function removeFirstKitten(){
  var kittens1 = kittens.slice(1)
  return kittens1
}
