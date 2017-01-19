let kittens = ["Milo", "Otis", "Gerfield"]

const destructivelyAppendKitten = name => kittens.push(name)

const destructivelyPrependKitten = name => kittens.unshift(name)

const destructivelyRemoveLastKitten = () => kittens.pop()

const destructivelyRemoveFirstKitten = () => kittens.shift()

const appendKitten = name => [...kittens, name]

const prependKitten = name => [name, ...kittens]

const removeLastKitten = () => kittens.slice(0, kittens.length - 1)

const removeFirstKitten = () => kittens.slice(1)
