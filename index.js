var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(foo){
  kittens.push(foo)
}

function destructivelyPrependKitten(foo){
  kittens.unshift(foo)
}

function destructivelyRemoveLastKitten(foo){
    kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
    return [...kittens, name]
}

function prependKitten(name) {
    return [name, ...kittens]
}

function removeFirstKitten() {
  return kittens.slice(1)
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}
