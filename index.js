var kittens = ["Garfield", "Stevie", "Protein"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var moreKittensEnd = [...kittens, name]
  return moreKittensEnd
}

function prependKitten(name) {
  var moreKittensBeginning = [name, ...kittens]
  return moreKittensBeginning
}

function removeLastKitten() {
  var popLastKitten =  kittens.slice(0, kittens.length - 1)
  return popLastKitten
}

function removeFirstKitten() {
  var popFirstKitten = kittens.slice(1)
  return popFirstKitten
}
