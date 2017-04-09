const app = "I don't do much."

function destructivelyAppendKitten(name) {
    kittens = ['Milo', 'Otis', 'Garfield']
    kittens.push(name)
    return kittens
}

function destructivelyPrependKitten(name) {
    kittens = ['Milo', 'Otis', 'Garfield']
    kittens.unshift(name)
    return kittens
}

function destructivelyRemoveLastKitten() {
    kittens = ['Milo', 'Otis', 'Garfield']
    kittens.pop()
    return kittens
}

function destructivelyRemoveFirstKitten() {
    kittens = ['Milo', 'Otis', 'Garfield']
    kittens.shift()
    return kittens
}

function appendKitten(name) {
    var kittens = ['Milo', 'Otis', 'Garfield']
    kittens.push(name)
    var newLitter = kittens
    return newLitter
}

function prependKitten(name) {
    var kittens = ['Milo', 'Otis', 'Garfield']
    kittens.unshift(name)
    var newLitter = kittens
    return newLitter
}

function removeLastKitten() {
    var kittens = ['Milo', 'Otis', 'Garfield']
    kittens.pop()
    var newLitter = kittens
    return newLitter 
}

function removeFirstKitten() {
    var kittens = ['Milo', 'Otis', 'Garfield']
    kittens.shift()
    var newLitter = kittens
    return newLitter
}
