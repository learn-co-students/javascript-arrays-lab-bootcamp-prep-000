const app = "I don't do much."
//var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten( name ) {
  kittens.push( name )
}

function destructivelyPrependKitten( name ) {
  kittens.unshift( name )
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten( name ) {
  var myArray = new Array()

  myArray = [...kittens, name]
  return myArray
}

function prependKitten( name ) {
  var myArray = new Array()

  myArray = [name, ...kittens]
  return myArray
}

function removeLastKitten() {
  var myArray = new Array()

  myArray = kittens.slice( 0,kittens.length-1 )
  return myArray
}

function removeFirstKitten() {
  var myArray = new Array()

  myArray = kittens.slice(1)
  return myArray

}
