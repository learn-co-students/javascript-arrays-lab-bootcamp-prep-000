const app = "I don't do much."

var kittens = ['Milo', 'Garfield', 'Otis']

function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return kittens
}

var kittens = ['Milo', 'Garfield', 'Otis']

function destructivelyPrependKitten(name) {
  kittens.unshift('Ralph')
  return kittens
}
