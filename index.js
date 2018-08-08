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
  const newArray = ["Arnold", ...kittens]
  return newArray
}

function removeLastKitten() {
  const newArray = kittens.slice(0, kittens.length - 1)
  return newArray
}