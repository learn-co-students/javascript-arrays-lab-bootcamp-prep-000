// Add your functions and code here
kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) { kittens.push(name) }
function destructivelyRemoveLastKitten() { kittens.pop() }
function destructivelyPrependKitten(name) { kittens.unshift(name) }
function destructivelyRemoveFirstKitten() { kittens.shift() }
function appendKitten(name) { return [...kittens, name] }
function prependKitten(name) { return [name, ...kittens] }
function removeLastKitten(name) { return kittens.slice(0, kittens.length - 1) }
function removeFirstKitten(name) { return kittens.slice(1) }