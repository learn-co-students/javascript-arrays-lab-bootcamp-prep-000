var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten (name) {
  name = kittens.push('Ralph')
  return name
}
function destructivelyPrependKitten (name) {
  name = kittens.unshift('Bob')
  return name
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}
function appendKitten(name) {
  name = [...kittens, 'Broom' ]
  return name
}

function prependKitten(name) {
  name = ['Arnold',...kittens]
return name
} 

function removeLastKitten() {
  return kittens.slice(0,kittens.length -1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}

