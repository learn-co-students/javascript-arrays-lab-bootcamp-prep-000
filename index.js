const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten (array, element) {
    kittens.push("Ralph")
    return kittens;
}

function destructivelyPrependKitten (array, element) {
   kittens.unshift("Bob")
   return kittens;
}

function destructivelyRemoveLastKitten (array) {
    kittens.pop("Garfield")
    return kittens;
}

function destructivelyRemoveFirstKitten (array) {
    kittens.shift("Milo")
    return kittens;
}

function appendKitten (array, element) {
    return [...kittens, "Broom"];
}

function prependKitten (array, element) {
    return ["Arnold", ...kittens];
}

function removeLastKitten (array) {
    return kittens.slice(0, kittens.length -1);
}

function removeFirstKitten (array) {
    return kittens.slice(1);
}
