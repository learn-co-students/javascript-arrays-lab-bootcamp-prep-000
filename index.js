// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]
var newCat = ["Broom"]
var newerCat = ["Arnold"]

function destructivelyAppendKitten(kitten) {
 kittens.push(kitten)
  return kittens
}

function destructivelyPrependKitten (kitten) {
  kittens.unshift(kitten)
  return kittens
}

function destructivelyRemoveLastKitten () {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten () {
  kittens.shift()
  return kittens
}

function appendKitten() {
   
  return (kittens.concat(newCat))
}

function prependKitten() {
    return (newerCat.concat(kittens))
}

function removeLastKitten() {
  return kittens.slice(0, 2)
}

function removeFirstKitten() {
  return kittens.slice(1,3)
}



