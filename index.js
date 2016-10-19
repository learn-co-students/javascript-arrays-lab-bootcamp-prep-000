const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
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

  var newkitten = [...kittens, name]
  return newkitten
}

function prependKitten(name) {
  var newkitten = [name, ...kittens]
  return newkitten
}

function removeLastKitten() {
  var first = kittens.slice(0, kittens.length - 1)
  return first
}

function removeFirstKitten() {
  var last = kittens.slice(-2)
  return last
}
