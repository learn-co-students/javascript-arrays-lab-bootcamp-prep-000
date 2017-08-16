const app = "I don't do much."
var kittens = ["Milo","Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
//console.log(kittens);
}
//destructivelyAppendKitten('Ralph')
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
//console.log(kittens);
}

function destructivelyRemoveLastKitten() {
kittens.pop()
return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten(){
return  [...kittens.slice(0,2)]
}

function removeFirstKitten() {
  return [...kittens.slice(1)]
}
