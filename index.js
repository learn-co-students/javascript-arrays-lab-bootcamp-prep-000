const app = "I don't do much."

let destructivelyAppendKitten = name => kittens.push(name)

let destructivelyPrependKitten = name => kittens.unshift(name)

let destructivelyRemoveLastKitten = () => kittens.pop()

let destructivelyRemoveFirstKitten = () => kittens.shift()

let appendKitten = name => [...kittens, name]

let prependKitten = name => [name, ...kittens]

let removeLastKitten = () => kittens.slice(0, -1)

let removeFirstKitten = () => kittens.slice(1)
