var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
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
  kittens.splice(3, 1, name)
  return kittens
}


function prependKitten(name){
  kittens.splice(0, 1, name)
  return kittens
}

function removeLastKitten(){
  kittens.slice()
}


