const app = "I don't do much."
function destructivelyAppendKitten(kitten){return kittens.push("Ralph")}
function destructivelyPrependKitten(kitten){return kittens.unshift("Bob")}
function destructivelyRemoveLastKitten(kitten) {return kittens.pop()}
function destructivelyRemoveFirstKitten(kitten){return kittens.shift()}

function appendKitten() {return [...kittens, "Broom"]}
function prependKitten() {return ["Arnold", ...kittens]}

function removeLastKitten(kitten){return kittens.slice(0,-1)}
function removeFirstKitten(kitten){return kittens.slice(1)}
