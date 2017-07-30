const app = "I don't do much."
var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name) {
 kittens.push(name)

}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}
function appendKitten(name) {
var result = [kittens.length]
result.push(name)
return result
}
