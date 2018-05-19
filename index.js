function kittens() {
  kittens = ['Milo', 'Otis', 'Garfield']
}

kittens()

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
  var kitnew = [...kittens, name]
  return kitnew
}

function prependKitten(name){
  var kitnew = [name, ...kittens]
  return kitnew
}

function removeLastKitten() {
  var kitnew = kittens.slice(0, kittens.length -1)
  return kitnew
}

function removeFirstKitten() {
  var kitnew = kittens.slice(1)
  return kitnew
}
