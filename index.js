const app = "I don't do much."

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
  var kittens2 = [...kittens, name]
  return kittens2
}

function removeLastKitten(name){
  return kittens.slice(0, kittens.length - 1)
}
