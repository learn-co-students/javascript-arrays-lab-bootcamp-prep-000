var kittens = [] //define your array here

// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
    kittens.push(name) 
}

destructivelyAppendKitten("Ralph")

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

destructivelyPrependKitten("Bob")

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name) {
  var newKittens = [...kittens, name]
  return newKittens
}

  appendKitten("Broom")
  
  var kittens = ["Milo", "Otis", "Garfield"]
  
  function prependKitten(name) {
      var newKittens = [name, ...kittens]
      return newKittens
  }
  
  prependKitten("Arnold")
  
  var kittens = ["Milo", "Otis", "Garfield"]
  
  function removeLastKitten() {
      var newKittens = kittens.slice(0, kittens.length - 1)
      return newKittens
  }
  
  var kittens = ["Milo", "Otis", "Garfield"]
  
  function removeFirstKitten() {
    var newKittens = kittens.slice(1)
    return newKittens
  }