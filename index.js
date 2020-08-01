var kittens = [ 'Milo', 'Otis', 'Garfield' ]

// Add your functions and code here
var destructivelyAppendKitten = name => kittens.push(name); kittens
var destructivelyPrependKitten = name => kittens.unshift(name); kittens

var destructivelyRemoveLastKitten = () => kittens.pop(); kittens
var destructivelyRemoveFirstKitten = () => kittens.shift(); kittens

var appendKitten = name => [...kittens, name]
var prependKitten = name => [name, ...kittens]

var removeLastKitten = name => kittens.slice(0, -1)
var removeFirstKitten = name => kittens.slice(1)

