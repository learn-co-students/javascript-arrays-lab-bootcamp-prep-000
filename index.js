function kittens() {
  var kittens = ["Milo", "Otis", "Garfield"]
}

function destructivelyAppendKitten(name) {
    kittens.push(name)
  }

function destructivelyPrependKitten(name) {
    kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
    kittens.pop()
}

function destructivelyRemoveFirstKitten() {
    kittens.shift()
}

function appendKitten(name) {
    var kittens = ["Milo", "Otis", "Garfield"]
    var kittens2 = [...kittens, name]
    return kittens2
}

function prependKitten(name) {
    var kittens = ["Milo", "Otis", "Garfield"]
    var kittens2 = [name, ...kittens]
    return kittens2
}

function removeLastKitten() {
    var kittens = ["Milo", "Otis", "Garfield"]
    var kittens2 = kittens.slice(0, -1)
    return kittens2
}

function removeFirstKitten() {
    var kittens = ["Milo", "Otis", "Garfield"]
    var kittens2 = kittens.slice(1)
    return kittens2
}
