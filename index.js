const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(){
  kittens.push('Ralph')
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop('Ralph')
}

function destructivelyPrependKitten(Bob){
  kittens.unshift('Bob')
}

function destructivelyRemoveFirstKitten(){
  kittens.shift('Bob')
}

function appendKitten(Broom) {
  var newKittens = [...kittens, 'Broom']
  return newKittens
}

function prependKitten(name) {
  var newKittens = ['Arnold', ...kittens]
  return newKittens
}

function removeLastKitten() {
  var newerKittens = kittens.slice(0, kittens.length -1)
  return newerKittens
}

function removeFirstKitten() {
  var newerKittens = kittens.slice(1)
  return newerKittens
}
