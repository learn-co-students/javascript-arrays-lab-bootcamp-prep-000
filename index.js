var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

var destructivelyAppendKitten = (name) => {
  return window.kittens.push(name)
}

var destructivelyPrependKitten = (name) => {
  return window.kittens.unshift(name)
}

var destructivelyRemoveLastKitten = () => {
  return window.kittens.pop()
}
var destructivelyRemoveFirstKitten = () => {
  return window.kittens.shift()
}


var appendKitten = (name) => {
  return [...window.kittens, name]
}

var prependKitten = (name) => {
  return [name, ...window.kittens]
}


var removeLastKitten = () => {
  var newArray = window.kittens.slice(0, window.kittens.length -1)
  return newArray
}

var removeFirstKitten = () => {
  var newArray = window.kittens.slice(1)
  return newArray
}


