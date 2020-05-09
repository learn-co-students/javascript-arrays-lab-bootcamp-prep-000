var kittens = ["Milo", "Otis", "Garfield"]
console.log(kittens)

function  destructivelyAppendKitten(name) {
    kittens.push(name)
}
//destructivelyAppendKitten("Misty");
//console.log(kittens)

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
  var kitten = [...kittens, name]
  return kitten
}

function prependKitten(name) {
  var kitten = [name,...kittens]
  return kitten
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}