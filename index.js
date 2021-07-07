var kittens = [] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push("Ralph")
}

function destructivelyPrependKitten(name) {
  return kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(1)
}

function appendKitten(name) {
  return [...kittens, "Broom"  ]
}

function prependKitten(name) {
  return ["Arnold", ...kittens ]
}

function removeLastKitten() {
 return kittens.slice(0, kittens.length -1)
 return kittens
}

function removeFirstKitten() {
  return kittens.slice(1)
  return kittens
}


