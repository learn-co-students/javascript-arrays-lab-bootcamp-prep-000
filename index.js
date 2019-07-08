var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
var destructivelyAppendKitten = (el) => kittens.push(el)
var destructivelyPrependKitten = el => kittens.unshift(el)
var destructivelyRemoveLastKitten = () => kittens.pop()
var destructivelyRemoveFirstKitten = () => kittens.shift()
var appendKitten = (el) => kittens.concat(el)
var prependKitten = (el) => [el, ...kittens]
var removeLastKitten = () => kittens.slice(0, -1)
var removeFirstKitten = () => kittens.slice(1)
