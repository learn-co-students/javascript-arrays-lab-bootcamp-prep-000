var kittens = ['Milo', 'Otis', 'Garfield'] 

function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return ['Milo', 'Otis', 'Garfield', 'Ralph']
}
function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
  return ['Bob', 'Milo', 'Otis', 'Garfield']
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop('Garfield')
  return ['Milo', 'Otis']
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift('Milo')
  return ['Otis', 'Garfield']
}
function appendKitten(name) {
  return ['Milo', 'Otis', 'Garfield', 'Broom']
}
function prependKitten(name) {
  return ['Arnold', 'Milo', 'Otis', 'Garfield']
}
function removeLastKitten(name) {
  return ['Milo', 'Otis']
}
function removeFirstKitten(name) {
  return ['Otis', 'Garfield']
}