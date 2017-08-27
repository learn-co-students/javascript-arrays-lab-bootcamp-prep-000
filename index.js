const app = "I don't do much."

function kittens() {
  var kittens = ["Milo", "Otis", "Garfield"]
}

function destructivelyAppendKitten(name) {
    var kittens = ["Milo", "Otis", "Garfield"]
    kittens.push("Ralph")
}

function destructivelyPrependKitten(name) {
    var kittens = ["Milo", "Otis", "Garfield"]
    kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten() {
    var kittens = ["Milo", "Otis", "Garfield"]
    kittens.pop("Garfield")
  }

function destructivelyRemoveFirstKitten() {
    var kittens = ["Milo", "Otis", "Garfield"]
    kittens.shift
}

// STILL WORKING BELOW HERE

function appendKitten(name) {
    var kittens = ["Milo", "Otis", "Garfield"]
    [...kittens, "Broom"]
}

function prependKitten(name) {
    var kittens = ["Milo", "Otis", "Garfield"]
    ["Arnold", ...kittens]
}

function removeLastKitten() {
    var kittens = ["Milo", "Otis", "Garfield"]
    cats.slice(-1)
}

function removeFirstKitten() {
    var kittens = ["Milo", "Otis", "Garfield"]
    cats.slice(1)
}
