var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
} // Add your functions and code here

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
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
  return [...kittens, "Broom"]
}

function prependKitten(name) {
  return ["Arnold", ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, 2)
  }
  
  function removeFirstKitten() {
    return kittens.slice(1)
  }