const app = "I don't do much."

{var kittens = new Array();
  kittens = ["Milo","Otis", "Garfield"];
  kittens;
}


function destructivelyAppendKitten(name) {
  kittens = ["Milo","Otis", "Garfield"]
  kittens.push('Ralph')
kittens
 }


function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
  kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
  kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
  kittens
}


function appendKitten(name) {
  var newArray = []
  newArray = [...kittens, 'Broom']

  return newArray
}

function prependKitten(name) {
  var newArray1 = []
  newArray1 = ['Arnold', ...kittens]

  return newArray1
}

function removeLastKitten(name) {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(name) {
  return kittens.slice(1)
}
