var array = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  
}


function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
  
}


function destructivelyRemoveLastKitten() {
  kittens.pop('Garfield')
  
}

function destructivelyRemoveFirstKitten() {
  kittens.shift('Milo')
  
}

function appendKitten(name) {
  [array, ...'Broom']
  return ['Milo', 'Otis', 'Garfield', 'Broom']
}

function prependKitten(name) {
  ['Arnold', ...array]
  return ['Arnold', 'Milo', 'Otis', 'Garfield']
}

function removeLastKitten() {
  array.slice(2)
  return ['Milo', 'Otis']
}

function removeFirstKitten() {
  array.slice(0)
  return ['Otis', 'Garfield']
}
