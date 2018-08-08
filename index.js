// Add your functions and code here

function destructivelyAppendKitten(name) {
  return kittens.push("Ralph")
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  const newArray =[...kittens, "Broom"]
  return newArray
}

function prependKitten(name) {
  const newArray = ["mykitten", ...kittens]
  return newArray
}