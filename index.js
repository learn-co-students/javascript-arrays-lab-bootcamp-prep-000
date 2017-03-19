const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

var destructivelyAppendKitten = () => kittens.push("Ralph")

var destructivelyPrependKitten = () => kittens.unshift("Bob")

var destructivelyRemoveLastKitten = () => kittens.pop()

var destructivelyRemoveFirstKitten = () => kittens.shift()

var appendKitten = element => [...kittens, element]

var prependKitten = element => [element, ...kittens]

var removeLastKitten = element => kittens.slice(0, kittens.length - 1)

var removeFirstKitten = element => kittens.slice(1)