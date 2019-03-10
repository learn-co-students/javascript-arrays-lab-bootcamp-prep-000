var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten() {
  kittens.push("Ralph")
}

function destructivelyPrependKitten() {
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  kittens
}

function appendKitten() {
  return [...kittens, "Broom"];
}

function prependKitten() {
  return ["Arnold",...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
  array
}
