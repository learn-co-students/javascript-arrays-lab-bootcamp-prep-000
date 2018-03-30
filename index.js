kittens = ["Milo","Otis","Garfield"]



function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name2){
  kittens.unshift(name2)
  return kittens 
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens 
}

function appendKitten(name5){
  return [...kittens,name5]
}

function prependKitten(name6){
  return [name6, ...kittens]
}

function removeFirstKitten(){
  return kittens.slice(1)
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length-1)
}


