const app = "I don't do much."



function destructivelyAppendKitten(Ralph){
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(Bob){
  kittens.unshift(Bob)
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

function appendKitten(Broom){
  var kittens1 = [...kittens, "Broom"]
  return kittens1
}

function prependKitten(Arnold){
  var kittens2 = ["Arnold", ...kittens]
  return kittens2
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}
