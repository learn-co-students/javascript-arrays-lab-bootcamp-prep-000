var kittens = ["Milo", "Otis", "Garfield"] //define your array here
// rip [`Cheshire`, `Felix`, `Long`]

// Add your functions and code here

function destructivelyAppendKitten() {
  kittens.push("Ralph")
  return
}
//verb = function.
//+1 beginning

function destructivelyPrependKitten() {
  kittens.unshift("Bob");
}
//-1 beginning

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
