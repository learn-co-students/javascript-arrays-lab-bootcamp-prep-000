const app = "I don't do much."

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  let kittenArr = kittens.slice()
  kittenArr.push(name)
  return kittenArr
}

function prependKitten(name) {
  let kittenArr = kittens.slice()
  kittenArr.unshift(name)
  return kittenArr
}

function removeLastKitten(){
  let kittenArr = kittens.slice()
  kittenArr.pop()
  return kittenArr
}

function removeFirstKitten() {
  let kittenArr = kittens.slice()
  kittenArr.shift()
  return kittenArr
}
