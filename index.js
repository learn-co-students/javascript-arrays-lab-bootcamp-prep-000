var kittens = ["Milo", "Otis", "Garfield"];
//define your array here

// Add your functions and code here

function destructivelyAppendKitten (name) {
  kittens[kittens.length] = name
  return kittens
}

function destructivelyPrependKitten (name) {
  kittens.unshift(name)
  return kittens
  
}

function destructivelyRemoveLastKitten (name) {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten (name) {
  kittens.shift()
  return kittens
}


function appendKitten (name) {
  var kittents_ver2 = kittens.concat(name)
  return kittents_ver2
}

function prependKitten (name) {
  var kittents_ver2 = [name, ...kittens ]
  return kittents_ver2
}

function removeLastKitten () {
  var kittents_ver2 = kittens.slice(0, kittens.length-1)
  return kittents_ver2
}

function removeFirstKitten () {
  var kittents_ver2 = kittens.slice(1, kittens.length)
  return kittents_ver2
}

