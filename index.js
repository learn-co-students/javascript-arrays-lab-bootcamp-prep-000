var kittens = [] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

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
  var extraKitten= kittens.concat(name.split(" "))
  return extraKitten
}

function prependKitten(name) {
  var extraFrontKitten= name.split(" ").concat(kittens)
  return extraFrontKitten
}

function removeLastKitten() {
  var lessOneCat = kittens.slice(0,kittens.length-1)
  return lessOneCat
}

function removeFirstKitten() {
  var firstCatGone = kittens.slice(1,kittens.length)
  return firstCatGone
}