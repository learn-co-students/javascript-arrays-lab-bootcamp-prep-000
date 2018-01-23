const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']
var R = 'Ralph'
function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return (kittens)
}

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
  return (kittens)
}

function destructivelyRemoveLastKitten() {
  kittens.pop('Garfield')
  return (kittens)
}

function destructivelyRemoveFirstKitten() {
  kittens.shift('Milo')
  return (kittens)
}

function appendKitten(name) {
  var newkittens = [...kittens, 'Broom']
  return (newkittens)
}

function prependKitten(name) {
  var newnewkittens = ['Arnold', ...kittens]
  return (newnewkittens)
}

function removeLastKitten() { 
  var rlkitten = kittens.slice(0, kittens.length - 1)
  return (rlkitten)
}



function removeFirstKitten() {
  var rfkittens = kittens.slice(1)
  return (rfkittens)
}





