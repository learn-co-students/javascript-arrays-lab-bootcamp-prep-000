const app = "I don't do much."
// var kittens = [
//     'kitten1',
//     'kitten2',
//     'kitten3'
// ]
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
    const new_array = [...kittens, name]
    return new_array
}
function prependKitten(name) {
    const new_array = [name, ...kittens]
    return new_array
}
function removeLastKitten() {
    const new_array = kittens.slice(0, kittens.length - 1)
    return new_array
}
function removeFirstKitten() {
    const new_array = kittens.slice(1)
    return new_array
}
