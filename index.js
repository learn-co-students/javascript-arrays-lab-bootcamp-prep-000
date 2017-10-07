const app = "I don't do much."

function  destructivelyAppendKitten(name) {
   kittens.push ('Ralph')
  return kittens
}

function destructivelyPrependKitten(name) {
   kittens.unshift ('Bob')
  return kittens
}

function destructivelyRemoveLastKitten() {
   kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
   kittens.shift ()
  return kittens
}

function appendKitten(name) {
   var moreKittens = [...kittens, name]
    return moreKittens
}

function prependKitten(name) {
   var moreKitten = [name, ...kittens]
    return moreKitten
}

function removeLastKitten() {
   var lessKitten = kittens.slice(0, kittens.length -1)
    return lessKitten
}

function removeFirstKitten() {
  var firstKitten = kittens.slice(1)
    return firstKitten
}
