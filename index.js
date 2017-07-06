const app = "I don't do much."


var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(){
kittens.push("Ralph")

return kittens

}

function destructivelyPrependKitten(){
kittens.unshift("Bob")

return kittens

}

function destructivelyRemoveLastKitten(){
kittens.pop()

return kittens
}

function destructivelyRemoveFirstKitten(){
kittens.shift()

return kittens
}

function appendKitten(){
[...kittens, "Broom"]

return [...kittens, "Broom"]
}

function prependKitten(){
["Arnold,...kittens"]

return ["Arnold",...kittens]

}

function removeLastKitten(){
kittens.slice(0, kittens.length - 1)

return kittens.slice(0, kittens.length - 1)

}

function removeFirstKitten(){
kittens.slice(1)

return kittens.slice(1)
}
