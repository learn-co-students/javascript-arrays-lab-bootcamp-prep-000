const app = "I don't do much."

function destructivelyAppendKitten(Ralph) {
kittens.push("Ralph")
}

function destructivelyPrependKitten(Ralph) {
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}
function appendKitten(Broom){
  return[...kittens, "Broom"]
}
function prependKitten(Arnold){
  return["Arnold", ...kittens]
}
function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}
function removeFirstKitten(){
  return kittens.slice(1)
}
