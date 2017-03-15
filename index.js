const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
    return kittens.push(name)
}

function destructivelyPrependKitten(name) {
    return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
    return kittens.splice(-1, 1)
}

function destructivelyRemoveFirstKitten(){
    return kittens.splice(0, 1)
}

function appendKitten(name) {
     var newKittens = [...kittens, name]
    return newKittens
}

function prependKitten(name) {
    var newKittens = [name, ...kittens]
    return newKittens
}

function removeLastKitten(){
    var newKittens = kittens.slice(0, kittens.length - 1)
    return newKittens
}

function removeFirstKitten() {
    var newKittens = kittens.slice(1)
    return newKittens
}
