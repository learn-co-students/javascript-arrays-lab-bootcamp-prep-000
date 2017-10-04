const app = "I don't do much."

const kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
 var destruction = (kittens.push(`${name}`))
  return destruction
}

function destructivelyPrependKitten(name) {
  var prepend = (kittens.unshift(`${name}`))
  return prepend
}

function destructivelyRemoveLastKitten() {
  var pop = (kittens.pop())
  return pop
}

function destructivelyRemoveFirstKitten() {
  var remove = (kittens.shift())
  return remove
}

function appendKitten(name) {
  var moreKitties = [...kittens, `${name}`]
  return moreKitties
}

function prependKitten(name) {
  return [`${name}`, ...kittens]
}

function removeLastKitten(){
 return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
 return kittens.slice(1)
}
