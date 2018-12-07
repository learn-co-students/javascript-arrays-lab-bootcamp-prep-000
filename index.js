var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
var destructivelyAppendKitten = (name) => {
  return kittens.push(name)
}
var destructivelyPrependKitten = (name) => {
  return kittens.unshift(name);
}
var destructivelyRemoveLastKitten = () => {
  return kittens.pop()
}

var destructivelyRemoveFirstKitten = () => {
  return kittens.shift()
}


var appendKitten = (name) => {
  return [...kittens, name]
  
}

var prependKitten = (name) => {
  return [name, ...kittens]
  
}
var removeFirstKitten = () => {
  return kittens.slice(1)
  
}
var removeLastKitten = () => {
  return kittens.slice(0,kittens.length-1)
  
}












